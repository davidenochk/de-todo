var configs = {};
configs.applicationPort = process.env.port || 1337;
configs.dbName = 'DETODO';
configs.dbHost = 'davidenoch:yINj3XUHRAvd71DcdUUldXkJrqtgHYBos0yMdEvOsJk5wLD7TcRbvX2U3jGalX7Z0kwEZhdLBkUfErmzgSVXYA==@davidenoch.documents.azure.com';
configs.dbPort = '10250/?ssl=true';

module.exports = configs;