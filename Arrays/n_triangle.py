# N-Triangle Pattern (converted from C++)
# Problem: Print a right-angled triangle pattern with numbers

def n_triangle(n):
    """
    Print a right-angled triangle pattern where:
    - Row 1 has: 1
    - Row 2 has: 1 2
    - Row 3 has: 1 2 3
    - And so on...
    
    Args:
        n (int): Number of rows in the triangle
    """
    # Loop through each row from 1 to n
    for i in range(1, n + 1):
        # Loop through each column from 1 to i
        for j in range(1, i + 1):
            print(j, end=" ")
        print()  # Move to next line

# Alternative Python implementation using list comprehension
def n_triangle_optimized(n):
    """
    Optimized version using list comprehension and join
    """
    for i in range(1, n + 1):
        row = ' '.join(str(j) for j in range(1, i + 1))
        print(row)

# Another alternative using string formatting
def n_triangle_string_format(n):
    """
    Using string formatting approach
    """
    for i in range(1, n + 1):
        print(' '.join(map(str, range(1, i + 1))))

# Test cases
if __name__ == "__main__":
    print("=== N-Triangle Pattern ===")
    
    print("\nTriangle pattern for n=3:")
    n_triangle(3)
    
    print("\nTriangle pattern for n=4:")
    n_triangle(4)
    
    print("\nTriangle pattern for n=5:")
    n_triangle(5)
    
    print("\n=== Using Optimized Method ===")
    print("\nTriangle pattern for n=4 (optimized):")
    n_triangle_optimized(4)
    
    print("\n=== Using String Format Method ===")
    print("\nTriangle pattern for n=4 (string format):")
    n_triangle_string_format(4)

# Example output for n=4:
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4




