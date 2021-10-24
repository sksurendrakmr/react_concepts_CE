/**
 * 1. Create the context
 * 2. Provide a context value
 * 3. Consume the context value
 */

import React from "react";

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
