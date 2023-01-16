/*
    url: https://www.sqlshack.com/understanding-the-sql-merge-statement/
    topic: MERGE Statement
*/
CREATE DATABASE SqlShackMergeDemo
GO
    
USE SqlShackMergeDemo
GO
    
CREATE TABLE SourceProducts(
    ProductID		INT,
    ProductName		VARCHAR(50),
    Price			DECIMAL(9,2)
)
GO
    
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(1,'Table',100)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(2,'Desk',80)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(3,'Chair',50)
INSERT INTO SourceProducts(ProductID,ProductName, Price) VALUES(4,'Computer',300)
GO
    
CREATE TABLE TargetProducts(
    ProductID		INT,
    ProductName		VARCHAR(50),
    Price			DECIMAL(9,2)
)
GO
    
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(1,'Table',100)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(2,'Desk',180)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(5,'Bed',50)
INSERT INTO TargetProducts(ProductID,ProductName, Price) VALUES(6,'Cupboard',300)
GO

-- Drop tables
-- DROP TABLE TargetProducts
-- DROP TABLE SourceProducts
    
-- Select tables
SELECT * FROM SourceProducts
SELECT * FROM TargetProducts

-- Merge Statement
MERGE TargetProducts AS Target
    USING SourceProducts	AS Source
    ON Source.ProductID = Target.ProductID

-- For Inserts
WHEN NOT MATCHED BY Target THEN
    INSERT (ProductID,ProductName, Price) 
    VALUES (Source.ProductID,Source.ProductName, Source.Price)

-- For Updates
WHEN MATCHED THEN UPDATE SET
    Target.ProductName	= Source.ProductName,
    Target.Price		= Source.Price
        
-- For Deletes
WHEN NOT MATCHED BY Source THEN
    DELETE

-- Checking the actions by MERGE statement
OUTPUT $action, 
DELETED.ProductID AS TargetProductID, 
DELETED.ProductName AS TargetProductName, 
DELETED.Price AS TargetPrice, 
INSERTED.ProductID AS SourceProductID, 
INSERTED.ProductName AS SourceProductName, 
INSERTED.Price AS SourcePrice;