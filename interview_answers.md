# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Functional components are "stateless" components that accept and display data in some form. Stateful components keep track of changing data through state and logic. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is called before the render method, and componentWillUpdate is called when the state or props passed to the component changes.

3. Define stateful logic.
    Logic is a behavior or process created with the use of hooks, and uses state.

4. What are the three steps of creating a successful test? What is done in each phase?
    Arrange, Act, Assert.
    Arrange - implement a render that displays where the test is taking place - displays elements
    Act - make a query, or give the test something to look for - making sure an element exists
    Assert - tell the test exactly what it is looking for - making sure an element exists in the form/location it is supposed to
