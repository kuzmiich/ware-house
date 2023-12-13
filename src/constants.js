const customResourceResponse = {};

customResourceResponse.success = { statusCode: 200, message: 'Request has been processed successfully.' };
customResourceResponse.requestCreated = { statusCode: 201, message: 'Record has been created successfully.' };
customResourceResponse.recordNotFound = { statusCode: 404, message: 'No record found.' };
customResourceResponse.requestValidationError = { statusCode: 422, message: 'Data validation failed.' };
customResourceResponse.serverError = { statusCode: 500, message: 'Internal server error.' };

export default customResourceResponse;