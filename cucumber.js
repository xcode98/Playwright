module.exports = {
    default: {
      require: ["./tests/step-definitions/*.ts"],
      format: ["progress", "json:reports/cucumber-report.json"],
      paths: ["./tests/features/*.feature"],
      requireModule: ["ts-node/register"],
    }
  };