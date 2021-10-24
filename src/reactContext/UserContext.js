/**
 * 1. Create the context
 * 2. Provide a context value
 * 3. Consume the context value
 *
 * we can set default value to our context and default
 * value can be set while creating the context.
 * It is passsed as an argument to createContext().
 *
 * This default value will only be used when a component
 * does not have a matching provider above it in the
 * component tree.
 *
 * Another way to consume Context value is using the
 * context type property on a class.
 *
 * But this approach only work with class components and with this
 * approach we can only subscribe to a single context (using contextType)
 */

import React from "react";

const UserContext = React.createContext("Suri");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
