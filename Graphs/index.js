// ========================================
// GRAPHS IN JAVASCRIPT
// ========================================

console.log("🕸️ Graphs Implementation\n");

// ========================================
// GRAPH CLASS (ADJACENCY LIST)
// ========================================

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add vertex
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add edge
    addEdge(vertex1, vertex2, weight = 1) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
        this.adjacencyList.get(vertex2).push({ vertex: vertex1, weight }); // Undirected graph
    }

    // Add directed edge
    addDirectedEdge(vertex1, vertex2, weight = 1) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
    }

    // Remove vertex
    removeVertex(vertex) {
        if (this.adjacencyList.has(vertex)) {
            // Remove all edges to this vertex
            for (const [key, edges] of this.adjacencyList) {
                this.adjacencyList.set(key, edges.filter(edge => edge.vertex !== vertex));
            }
            this.adjacencyList.delete(vertex);
        }
    }

    // Remove edge
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, 
                this.adjacencyList.get(vertex1).filter(edge => edge.vertex !== vertex2)
            );
        }
        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, 
                this.adjacencyList.get(vertex2).filter(edge => edge.vertex !== vertex1)
            );
        }
    }

    // Get neighbors
    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }

    // Get all vertices
    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }

    // Get all edges
    getEdges() {
        const edges = [];
        for (const [vertex, neighbors] of this.adjacencyList) {
            for (const neighbor of neighbors) {
                edges.push({ from: vertex, to: neighbor.vertex, weight: neighbor.weight });
            }
        }
        return edges;
    }

    // Print graph
    print() {
        for (const [vertex, neighbors] of this.adjacencyList) {
            console.log(`${vertex} -> ${neighbors.map(n => `${n.vertex}(${n.weight})`).join(', ')}`);
        }
    }
}

// ========================================
// GRAPH TRAVERSAL ALGORITHMS
// ========================================

// 1. Depth First Search (DFS) - Recursive
function dfsRecursive(graph, startVertex, visited = new Set()) {
    visited.add(startVertex);
    console.log(`Visited: ${startVertex}`);

    const neighbors = graph.getNeighbors(startVertex);
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
            dfsRecursive(graph, neighbor.vertex, visited);
        }
    }

    return Array.from(visited);
}

// 2. Depth First Search (DFS) - Iterative
function dfsIterative(graph, startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    const result = [];

    while (stack.length > 0) {
        const vertex = stack.pop();
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            console.log(`Visited: ${vertex}`);

            const neighbors = graph.getNeighbors(vertex);
            for (let i = neighbors.length - 1; i >= 0; i--) {
                if (!visited.has(neighbors[i].vertex)) {
                    stack.push(neighbors[i].vertex);
                }
            }
        }
    }

    return result;
}

// 3. Breadth First Search (BFS)
function bfs(graph, startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
        console.log(`Visited: ${vertex}`);

        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                visited.add(neighbor.vertex);
                queue.push(neighbor.vertex);
            }
        }
    }

    return result;
}

// ========================================
// GRAPH ALGORITHMS
// ========================================

// 1. Shortest Path (Dijkstra's Algorithm)
function dijkstra(graph, startVertex) {
    const distances = new Map();
    const previous = new Map();
    const queue = [];
    const visited = new Set();

    // Initialize distances
    for (const vertex of graph.getVertices()) {
        distances.set(vertex, Infinity);
    }
    distances.set(startVertex, 0);

    queue.push({ vertex: startVertex, distance: 0 });

    while (queue.length > 0) {
        // Sort queue by distance (priority queue simulation)
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex, distance } = queue.shift();

        if (visited.has(vertex)) continue;
        visited.add(vertex);

        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) {
            const newDistance = distance + neighbor.weight;
            
            if (newDistance < distances.get(neighbor.vertex)) {
                distances.set(neighbor.vertex, newDistance);
                previous.set(neighbor.vertex, vertex);
                queue.push({ vertex: neighbor.vertex, distance: newDistance });
            }
        }
    }

    return { distances, previous };
}

// 2. Minimum Spanning Tree (Kruskal's Algorithm)
function kruskal(graph) {
    const edges = graph.getEdges();
    edges.sort((a, b) => a.weight - b.weight);

    const parent = new Map();
    const rank = new Map();

    // Initialize disjoint sets
    for (const vertex of graph.getVertices()) {
        parent.set(vertex, vertex);
        rank.set(vertex, 0);
    }

    function find(vertex) {
        if (parent.get(vertex) !== vertex) {
            parent.set(vertex, find(parent.get(vertex)));
        }
        return parent.get(vertex);
    }

    function union(vertex1, vertex2) {
        const root1 = find(vertex1);
        const root2 = find(vertex2);

        if (root1 === root2) return false;

        if (rank.get(root1) < rank.get(root2)) {
            parent.set(root1, root2);
        } else if (rank.get(root1) > rank.get(root2)) {
            parent.set(root2, root1);
        } else {
            parent.set(root2, root1);
            rank.set(root1, rank.get(root1) + 1);
        }
        return true;
    }

    const mst = [];
    for (const edge of edges) {
        if (union(edge.from, edge.to)) {
            mst.push(edge);
        }
    }

    return mst;
}

// 3. Topological Sort (DFS-based)
function topologicalSort(graph) {
    const visited = new Set();
    const temp = new Set();
    const result = [];

    function dfs(vertex) {
        if (temp.has(vertex)) {
            throw new Error("Graph contains cycle");
        }
        if (visited.has(vertex)) return;

        temp.add(vertex);
        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) {
            dfs(neighbor.vertex);
        }
        temp.delete(vertex);
        visited.add(vertex);
        result.unshift(vertex);
    }

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            dfs(vertex);
        }
    }

    return result;
}

// 4. Cycle Detection
function hasCycle(graph) {
    const visited = new Set();
    const recStack = new Set();

    function dfs(vertex) {
        if (recStack.has(vertex)) return true;
        if (visited.has(vertex)) return false;

        visited.add(vertex);
        recStack.add(vertex);

        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) {
            if (dfs(neighbor.vertex)) return true;
        }

        recStack.delete(vertex);
        return false;
    }

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            if (dfs(vertex)) return true;
        }
    }

    return false;
}

// 5. Connected Components
function findConnectedComponents(graph) {
    const visited = new Set();
    const components = [];

    function dfs(vertex, component) {
        visited.add(vertex);
        component.push(vertex);

        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                dfs(neighbor.vertex, component);
            }
        }
    }

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            const component = [];
            dfs(vertex, component);
            components.push(component);
        }
    }

    return components;
}

// 6. Bipartite Graph Check
function isBipartite(graph) {
    const colors = new Map();
    const queue = [];

    for (const vertex of graph.getVertices()) {
        if (colors.has(vertex)) continue;

        colors.set(vertex, 0);
        queue.push(vertex);

        while (queue.length > 0) {
            const current = queue.shift();
            const currentColor = colors.get(current);

            const neighbors = graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!colors.has(neighbor.vertex)) {
                    colors.set(neighbor.vertex, 1 - currentColor);
                    queue.push(neighbor.vertex);
                } else if (colors.get(neighbor.vertex) === currentColor) {
                    return false;
                }
            }
        }
    }

    return true;
}

// ========================================
// GRAPH UTILITIES
// ========================================

// Create graph from adjacency matrix
function createGraphFromMatrix(matrix) {
    const graph = new Graph();
    
    for (let i = 0; i < matrix.length; i++) {
        graph.addVertex(i);
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                graph.addEdge(i, j, matrix[i][j]);
            }
        }
    }
    
    return graph;
}

// Convert graph to adjacency matrix
function graphToMatrix(graph) {
    const vertices = graph.getVertices();
    const matrix = Array(vertices.length).fill().map(() => Array(vertices.length).fill(0));
    
    for (let i = 0; i < vertices.length; i++) {
        const neighbors = graph.getNeighbors(vertices[i]);
        for (const neighbor of neighbors) {
            const j = vertices.indexOf(neighbor.vertex);
            matrix[i][j] = neighbor.weight;
        }
    }
    
    return matrix;
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Graph Algorithms");
console.log("=".repeat(50));

// Create a sample graph
const graph = new Graph();
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 3);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 2);
graph.addEdge(2, 3, 4);
graph.addEdge(3, 4, 2);
graph.addEdge(2, 4, 3);

console.log("Graph Structure:");
graph.print();

// Test Traversal Algorithms
console.log("\n1. DFS Recursive:");
dfsRecursive(graph, 0);

console.log("\n2. DFS Iterative:");
dfsIterative(graph, 0);

console.log("\n3. BFS:");
bfs(graph, 0);

// Test Shortest Path
console.log("\n4. Dijkstra's Shortest Path from vertex 0:");
const { distances, previous } = dijkstra(graph, 0);
console.log("Distances:", Object.fromEntries(distances));
console.log("Previous:", Object.fromEntries(previous));

// Test Minimum Spanning Tree
console.log("\n5. Kruskal's MST:");
const mst = kruskal(graph);
console.log("MST Edges:", mst);

// Test Connected Components
console.log("\n6. Connected Components:");
const components = findConnectedComponents(graph);
console.log("Components:", components);

// Test Bipartite Check
console.log("\n7. Is Bipartite:", isBipartite(graph));

// Test Cycle Detection
console.log("\n8. Has Cycle:", hasCycle(graph));

// Create a directed graph for topological sort
const directedGraph = new Graph();
directedGraph.addDirectedEdge(5, 2);
directedGraph.addDirectedEdge(5, 0);
directedGraph.addDirectedEdge(4, 0);
directedGraph.addDirectedEdge(4, 1);
directedGraph.addDirectedEdge(2, 3);
directedGraph.addDirectedEdge(3, 1);

console.log("\n9. Topological Sort:");
try {
    const topoSort = topologicalSort(directedGraph);
    console.log("Topological Order:", topoSort);
} catch (error) {
    console.log("Error:", error.message);
}

// Test Matrix Conversion
console.log("\n10. Graph to Matrix:");
const matrix = graphToMatrix(graph);
console.log("Adjacency Matrix:");
matrix.forEach(row => console.log(row));

console.log("\n✅ All graph tests completed!");
