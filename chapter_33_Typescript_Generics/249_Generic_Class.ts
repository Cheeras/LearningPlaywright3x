class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0];
    }

    getAll(): T[]{
        return this.items;
    }
    count(): number{
        return this.items.length;
    }
  }

  let statuscodestore = new TestDataStorage<number>();
  let testNameStore = new TestDataStorage<string>();

  // Adding items
  statuscodestore.add(200);
  statuscodestore.add(404);
  statuscodestore.add(500);

  testNameStore.add("GET API Test");
  testNameStore.add("POST API Test");
  testNameStore.add("DELETE API Test");

  // Printing items
  console.log("All Status Codes:", statuscodestore.getAll());    // [200, 404, 500]
  console.log("First Status Code:", statuscodestore.getFirst()); // 200
  console.log("Total Count:", statuscodestore.count());          // 3

  console.log("All Test Names:", testNameStore.getAll());        // ["GET API Test", "POST API Test", "DELETE API Test"]
  console.log("First Test Name:", testNameStore.getFirst());     // GET API Test
  console.log("Total Tests:", testNameStore.count());            // 3