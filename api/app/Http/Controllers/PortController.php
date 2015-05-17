<?php namespace App\Http\Controllers;

use App\Port;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class PortController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//

		$ports = Port::all();

		return response()->json($ports);


	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{

		$inputs = $request->all();
		$port = new Port($inputs);

		$port->save();

		return response()->json($port);

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request, $id)
	{

		$port = Port::find($id);

		// if (!$port) return response()->json($port, 404);

		$inputs = $request->all();

		$port->update($inputs);
		// $port->save();

		return response()->json($port);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//

		$port = Port::find($id);

		if (!$port) return response()->json($port, 404);

		$port->delete();
		// $port->save();

		return response()->json($port);

	}

}
