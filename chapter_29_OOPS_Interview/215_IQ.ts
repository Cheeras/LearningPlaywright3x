let responseCode: number[] = [200,201,400,500,302,403];
function fetchFailedCodes(codes: number[]): number[] {
    return codes.filter(function(code: number): boolean {
        return code >= 400;
    });
}

console.log(fetchFailedCodes(responseCode)); // Output: [400, 500, 403]
console.log(fetchFailedCodes([200, 201, 404, 500])); // Output: [404, 500] 