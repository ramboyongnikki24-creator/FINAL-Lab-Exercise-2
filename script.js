console.log("Script is running");

        var btn = document.getElementById("loadData");
        console.log("Button found:", btn);

        btn.addEventListener("click", function() {
            console.log("Button was clicked");

            var xhr = new XMLHttpRequest();
            console.log("XHR created, readyState:", xhr.readyState);

            xhr.onreadystatechange = function() {
                console.log("readyState changed to:", xhr.readyState, "| status:", xhr.status);

                if (xhr.readyState === 4) {
                    var output = document.getElementById("output");

                    if (xhr.status === 200) {
                        var data = JSON.parse(xhr.responseText);
                        console.log("Data received:", data);
                        output.innerHTML =
                            "<strong>Post Title:</strong> " + data.title + "<br><br>" +
                            "<strong>Content:</strong> " + data.body;
                    } else {
                        output.innerHTML = "<span style='color:red;'>Error: " + xhr.status + " - " + xhr.statusText + "</span>";
                    }
                }
            };

            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
            xhr.send();
            console.log("Request sent");
        });