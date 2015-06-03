collection-field-stripper
=========================
models are a beautiful elegant solution

but sometimes you just need to get down and dirty and don't want to have to deal with all the high maintenance that comes with using a model

collection field stripper is a simple solution that will strip unwanted data fields from your documents prior to inserts

````
Stripper.strip(doc, dict);
````

usage
====

add an array dictionary parameter to your collection called fields.

````
Mycollection.fields = ['name', 'status', 'id', 'createdAt', 'updatedAt'];
````

in your deny call

````
doc = Stripper.strip(doc, Mycollection.fields);

````
