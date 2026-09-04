# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **603**
- latestMachineAdded: **デルピエロ**（オーイズミ / 2011-09-19納品予定・09-20導入資料）
- latestRecord: `docs/real_machine_db/machines/2011-09-19_del-piero.md`
- chronologicalFrontier: **2011-09-19**
- frontierLatestExactDateMachine: **デルピエロ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — デルピエロ

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「マジカルスロット 魔法少女隊アルス」を再取得して開始。
- INDEXは初期19件表示のまま更新が古いため、README規定どおり新しいLATEST_HANDOFFを優先。開始時正本は recordCount **602** / chronologicalFrontier **2011-09-05**。
- 2011-09-05同日群の未来少年コナン、探偵物語TURBO、夢夢ワールドDXII、魔法少女隊アルスは登録済みのため重複追加しない。
- HAZUSEカレンダーの09-09 / 09-11 / 09-12 / 09-16境界を再監査。これらの日付について今回、2011-09-05より後かつ09-19より前の未登録パチスロを直接確定できず、次の確定パチスロ群として09-20を確認。
- repo検索で「デルピエロ」「マジカルハロウィン3」とも未登録を確認。最古市場日が同じ09-19納品予定群であるため、まずデルピエロを603件目として追加。
- デルピエロは当時グリーンべるとが**2011-09-19納品予定**、HAZUSE・パチビーが**2011-09-20導入開始**。平均化せず `DATE_DEFINITION_DIFFERENCE` として保持し、時系列キーは最古の具体的市場投入日09-19を採用。
- 型式 **デルピエロ** / 検定番号 **1S0143**。

### 性能コア

- 5号機 / ボーナス非搭載ART特化機。
- 機械割: **96.6 / 98.5 / 100.9 / 103.4 / 106.5 / 110.2%**。グリーンべると・パチビー精密値。HAZUSEは97/99/101/103/107/110%の整数丸め。
- ART初当たり: **1/224.4 / 1/213.6 / 1/202.0 / 1/190.4 / 1/177.6 / 1/165.4**。業界記事・パチビー・HAZUSE一致。
- 状態別ART当たり:
  - 通常: **1/450.5 / 439.3 / 428.4 / 411.3 / 385.4 / 359.0**
  - 高確: **1/90.8 / 82.7 / 74.3 / 67.4 / 61.1 / 55.4**
  - 超高確: **約1/13.9〜14.1**
- 50枚ベース: **33.2〜33.7G/1000円**。当時グリーンべると直接値。設定別対応は不明なのでレンジのまま保持。
- ART「デルピエロボーナス」: **1セット30G / 約+2.0枚/G / 約60枚/セット**。
- 初回継続33%、突破後88%、フリーズ時97%。
- 天井: **1 / 111 / 222 / 333 / 444 / 555 / 666 / 777G** の8候補から規定Gを選ぶ方式。到達後の次回ART当選は**88%継続**。

### resetBehavior v0.7

- 通常時の通常/高確/超高確3状態、8候補天井、天井到達後88%継続は複数資料で確認。
- しかし設定変更時に、選択済み規定天井/ゲーム数進捗がCLEAR・RETAIN・RESELECTのどれか、内部状態がどこから始まるか、ARTストックをどう処理するかは、本機固有の直接資料を回収できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井進捗・内部状態・ストック保持、単純電源OFF→ONも同様に **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、高確スタート率、朝一特定G以内ART当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶、DELL!DELL!ランプ等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- P-WORLDの「天井到達後はリプレイ入賞音が変化しやすい」は天井到達示唆であり、設定変更判別へ流用しない。
- 有利区間は5号機のため **NOT_APPLICABLE**。

### CONFLICT / 定義差

- 導入日: グリーンべると **09-19納品予定** vs HAZUSE/パチビー **09-20導入開始**。`DATE_DEFINITION_DIFFERENCE`。
- 機械割: 精密値96.6〜110.2% vs HAZUSE整数丸め97〜110%。平均化しない。
- ART基本セット: 業界記事・パチビー・P-WORLD・パチマガスロマガが**30G**で一致。一方、現行HAZUSEページ配当表の画像代替テキストだけが**50G+α**。`CONFLICT_LIKELY_SOURCE_PAGE_LABEL_ERROR`として保持し、複数独立資料一致の30Gを主値。

## 2011-09-19〜09-20同日市場群 / 次の境界

- **マジカルハロウィン3**が次の最優先。KPEの当時業界発表では**2011-09-19納品開始予定**、HAZUSEでは**2011-09-20導入開始**。repo検索で未登録確認済み。
- デルピエロと同じ日付定義差を持つため、次回はマジカルハロウィン3を性能コア＋resetBehavior v0.7で604件目候補として処理する。
- その後、09-19/20群に他の未登録パチスロがないか再度クローズ監査してから09-26境界へ進む。
- HAZUSEカレンダーはパチンコ・パチスロ混在なので、09-26/09-30も各機種ページで区分と導入日を確認してから追加する。

## 主要出典 — デルピエロ（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00002168/`
- パチビー: `https://www.pachibee.jp/machines/index/211070006`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6450`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0143/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/27/a.php`
- fenブログ当時試打回顧: `https://ameblo.jp/fen777/entry-10962097863.html`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- マジカルハロウィン3導入境界確認（グリーンべると）: `https://web-greenbelt.jp/00002205/`
- マジカルハロウィン3導入境界確認（HAZUSE）: `https://data.hazuse.com/?genre=202&machine_code=0S1357`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 603 / chronologicalFrontier 2011-09-19**から開始。
2. デルピエロを重複追加しない。
3. **マジカルハロウィン3**を最優先でrepo再確認し、未登録のままなら性能コア＋resetBehavior v0.7で604件目として処理。
4. 09-19納品 / 09-20導入群の残存未登録を監査して同日群を閉じる。
5. その後09-26境界へ進む。日付カレンダーだけでパチスロ判定せず機種ページ/業界資料で確認。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
