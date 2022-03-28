# What are the benefits of functional programming?

    1. Once you learn to think and program in a functional style, you will learn many techniques that could be used to create very large, powerful, and virtually bug-free code bases that are composed of many smaller, self-contained, easily testable parts.

    - At its core:
      - Takes a large number of complex ideas and organizing them in a coherent way while at the same time ensuring the code is easy to test and modify.

# Differences between OOP and FP

    1. OOP:
      - Humans think in terms of objects and relationships between these objects
      - Understand our thought patterns more easily by organizing computing programs to leverage these principles.

    2. FP:
       -  brings the precision of mathemetical functions into computer programs.
       -  makes it far easier to avoid bugs.

# Functional Programming

    1. A declarative style of programming
      - More of a focus on what things are as opposed to how to get them.
        - Declarative: "What?"
        - Imperative: "How?"

IE. - What does a house consist of? - A foundation, four walls, and a roof on top.

    2. Core Concepts
       1. Immutability
       2. Separating functions and data
       3. First-class functions

# Immutability

    1. Most of the values in a program our constant in functional programming

IE. We do not assign, we define.

    2. Instead of naming containers that hold values at different times, we name the values themselves.

    3. It freezes from having to deal with state change.

    4. Start off with an immutable set of data as a single source of truth.
       1. We then use functions to combine this data piece by piece and transform it into useful information.

       2. Two Advantages:
          1. Original data will remain in tact. Which makes bugs much easier to find.
          2. Programs constructed in this way are much easier to keep track of since you can focus on any given piece individually.

    5. Use const instead of let and var

# Seperation of Data and Functions

    Data
        1. Any value that a program contains
        2. Represented by simple arrays, hashes, and JS Objects

    Functions
        1. Any operation we can apply to data to convert it into useful information.
        2. Completely seperate entities from the data that they operate on
        3. Data must be passed as arguments into the function instead of using the "this" keyword.
        4. Because of immutability, they should never make changes to any of the data that they touch, rather, they return a copy of the data they touch.
