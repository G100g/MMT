<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ports', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();

			$table->string("name");
			$table->string("code");
			$table->integer("max_width");
			$table->integer("max_length");
			$table->string("polygon");

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ports');
	}

}
