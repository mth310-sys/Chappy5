更新日: 2026-09-13

## 現在地点
- recordCount: **1604**
- latestRecordAdded: **推しスロ アイドルVer. — No.1604**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-01_oshi-slot-idol-ver.md`
- chronologicalFrontier: **2023-12-01**
- frontierLatestMachine: **推しスロ アイドルVer. — No.1604**
- schema: **resetBehavior v0.7**
- status: **2023-12-01_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新main `5358e8880880b1b792048c06e5efb7be72a7809a` を起点にREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1603 `パチスロ ケンガンアシュラ` を確認して開始。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 時系列本線は2023-12-01 PB実導入の `推しスロ アイドルVer.` をNo.1604として性能コア + resetBehavior v0.7で追加。
- Amusement Japan / グリーンべるとで《ミクちゃんガイア三宮店》5階の専用フロア55台が2023-12-01に実オープンしたことを確認。P-WORLDも `S推しスロDA / 3S0885 / 2023-12-01` を掲載。
- 一撃「2023年11月初旬」・パチマガスロマガ「2023年11月」と日付差があるが、実店舗稼働日を直接確認できる2023-12-01をcanonicalとし `CONFLICT_RELEASE_DATE_SOURCE_LABEL` を保持。
- 同一型式 `S推しスロDA` は遊技日本2024-04-05の検定通過記事にも現れる。2023-12-01実稼働と併存するため導入日を改変せず、理由未確定の `CONFLICT_INSPECTION_CHRONOLOGY_UNEXPLAINED` とした。

## No.1604 — 推しスロ アイドルVer.
- path: `docs/real_machine_db/machines/2023-12-01_oshi-slot-idol-ver.md`
- manufacturer: **DAXEL**
- formalModel / inspectionCode: **S推しスロDA / 3S0885**
- releaseDate: **2023-12-01**
- generation/system: **6号機 / AT・擬似ボーナス / PB機 / NEW AGEシステム**
- settings: **1 / 2 / 3 / 4 / 5**
- 機械割: **94.8 / 99.6 / 100.0 / 100.0 / 100.0%**
- initial structure: **レア役等でのボーナス抽選ではなく、通常時150G消化で擬似ボーナス当選**
- base: **約52.1G/50枚**
- 純増: **約3.0枚/G canonical。Amusement Japan発表会記事は3.1枚のためCONFLICT**
- basic payout: **チャリティ約114枚 / 等倍約141枚 / REG約129枚 / BIG約201枚 / スーパーBIG約501枚**
- normal ceiling: **150G固定で擬似ボーナス**
- setting visibility: **台枠ランプで設定そのものを確認可能（1赤 / 2青 / 3緑 / 4黄 / 5紫）**
- reset: 後年の機種別リセット一覧では「リセット恩恵は特になし」。ただし設定変更時の内部150G進行・内部状態・有利区間を直接明記する固有資料は確認できず、一般6号機仕様から推定せず `UNVERIFIED_AFTER_RESEARCH`。
- carry: 据え置き時の内部ゲーム数/状態/有利区間の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- pure power: 純電源OFF→ON時の内部ゲーム数/状態/有利区間の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- reset benefit: 設定変更専用の天井短縮、朝一モード、優遇率、当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- reset detection: 現在設定は枠ランプ色で常時公開。前日既知色から色が変化すれば設定変更確認材料になるが、同色時の打ち直し/据え置き判別までは固定しない。本機固有ガックン/有利区間ランプ判別は `UNVERIFIED_AFTER_RESEARCH`。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- record commit: **ac65f1299f89e6562137649208e5cdaada7a7a3c**

## 2023-12-01群 — CLOSED 1/1 canonical
1. 推しスロ アイドルVer. — No.1604 **DONE**

監査注記:
- 全国一般新台日ではなくPB実店舗導入日として独立群扱い。
- 2023-12-01の実オープンを業界2媒体、機種DBで照合したためCLOSED。

## resetBehavior 遡及QA進捗
- 今回は時系列本線No.1604の追加を優先し、遡及QAカーソルは変更なし。
- 直前完了: `2007-07-08_marvel-heroes.md` マーベルヒーローズ — **PARTIAL_RESEARCH_EXHAUSTED**（既存COMPLETE_CORE維持）。
- 次カーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T候補。最新mainで存在/順序を再確認してから処理）。

## 次回再開地点
1. 最新mainを再同期し、No.1604と本handoffの反映を再取得確認。
2. 時系列本線は **2023-12-04群** の境界を最初に再監査し、その群の未処理先頭からNo.1605を付与する。
3. 12/4 canonical強候補（今回複数資料で確認）:
   - `Lラブ嬢3～Wご指名はいかがですか？～`
   - `L リングにかけろ1 V`
   - `ニューシオサイ`
   - `L花の慶次～佐渡攻めの章`
   - `LモンキーターンV`（複数当時資料・山佐PRホールデビュー12/4引用あり）
   - `Lマジカルハロウィン8`
   - `Sクランキークレスト`
4. `パチスロ琉神－30 スイカバージョン` は資料差を必ず監査する。複数機種DBは2023-12-04導入とする一方、遊技通信は「12月から一部地域でテスト導入予定」、一撃は「2023-12-06より一部地域テスト導入」とする。通常全国導入群へ即混入させず、**地域テスト導入/デモ導入境界**として日付・扱いを確定してから追加する。
5. グリーンべると12/3更新一覧は12/4パチスロを4機のみ掲載する一方、他の当時カレンダー/ホール実導入/PDF市場資料はモンキーターンV・マジカルハロウィン8・クランキークレストも12/4とする。したがって単一一覧で群件数を固定しない。
6. 遡及QAを併行する場合は `2007-07-09_genju-haou-t.md` 候補から継続。

## 今回参照した主要ソース
取得日: 2026-09-13
- Amusement Japan 推しスロ12/1実導入: https://www.amusement-japan.co.jp/article/detail/10003979/
- グリーンべると 推しスロ専用フロア: https://web-greenbelt.jp/post-78770/
- P-WORLD 推しスロ: https://www.p-world.co.jp/machine/database/9917
- Amusement Japan 発表会/純増3.1枚: https://www.amusement-japan.co.jp/article/detail/10003810/
- 遊技通信 推しスロ発表（P-WORLD転載）: https://news.p-world.co.jp/articles/25443/yugitsushin
- 遊技日本 推しスロ発表（P-WORLD転載）: https://news.p-world.co.jp/articles/25404/nippon
- 一撃 推しスロ: https://1geki.jp/slot/s_oshisloaid/
- ちょんぼりすた 推しスロ: https://chonborista.com/slot/daxel-slot/200378/
- パチマガスロマガ 推しスロ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/15/kh01.php
- 遊技日本 S推しスロDA 2024-04検定通過: https://news.p-world.co.jp/articles/27467/nippon
- スロリスクタイム リセット一覧: https://pachisuro100.com/reset/
- グリーンべると 2023-12-04新台一覧: https://news.p-world.co.jp/articles/26197/greenbelt
- 6号機一覧/12月導入群: https://sulocale.sulopachinews.com/archives/43927
- パチンコ・パチスロ.com 2023新台カレンダー: https://pachinkopachisro.com/archives/57208678.html
- Sirius 第19回パチスロ定例セミナーPDF（12/4導入群市場資料）: https://websirius.jp/websiriuswp/wp-content/uploads/2023/12/24cb980ed3cef2d2980b16ca0ff3de35.pdf
- 一撃 ニューシオサイ: https://1geki.jp/slot/s_newsiosai_sa/39/
- 藤商事 パチスロ琉神-30 スイカバージョン: https://www.fujimarukun.co.jp/products/s_ryujin/
- 遊技日本 琉神発表（P-WORLD転載）: https://news.p-world.co.jp/articles/25900/nippon
- 遊技通信 琉神発表（P-WORLD転載）: https://news.p-world.co.jp/articles/26062/yugitsushin

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
