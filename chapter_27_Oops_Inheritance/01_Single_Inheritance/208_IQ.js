class Report {
    generate(data) {
        console.log("Generating report with data:", data);
    }
}

class HTMLReport extends Report {
    generate(data) {
        console.log("Generating HTML report with data:", data);
    }
}

class JSONReport extends Report {
    generate(data) {
        console.log(JSON.stringify({ report: "Generating JSON report with data:", data: data }));
    }
}

class TextReport extends Report {
    generate(data) {
        console.log("===== REPORT =====\n " + data +"\n ===========");
    }  
}

let reports = [new HTMLReport(), new JSONReport(), new TextReport()];
let data = { title: "Sales Report", content: "Sales increased by 20% this quarter." };

//reports.forEach(report => report.generate(data));
reports.forEach(function(rerpor){
    rerpor.generate("5 test passed, 1 failed");
    console.log("-------------------");
})