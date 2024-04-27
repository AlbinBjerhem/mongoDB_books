

let simulateDatabaseFailure = false;

const toggleDatabaseFailure = (state) => {
  simulateDatabaseFailure = state;
};

const isDatabaseFailureSimulated = () => simulateDatabaseFailure;

export { toggleDatabaseFailure, isDatabaseFailureSimulated };
