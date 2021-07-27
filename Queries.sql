/* CREATE TABLE Orders (
    OrderID int NOT NULL,
    CustomerID int,
  	ProductID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(id),
  	FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
); */

--INSERT INTO Customers VALUES (1, 'Naeem', 'Jahanzeb', 23);
--SELECT * from Customers;
--INSERT INTO Orders (1, 1, 1);
SELECT Customers.FirstName
FROM Orders INNER JOIN Customers
ON Orders.customerid = Customers.id;
