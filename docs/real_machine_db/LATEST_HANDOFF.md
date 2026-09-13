更新日: 2026-09-14

## 現在地点
- recordCount: **1641**
- latestRecordAdded: **Lパチスロうる星やつら — No.1641**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-08_l-urusei-yatsura.md`
- chronologicalFrontier: **2024-04-08**
- frontierLatestMachine: **Lパチスロうる星やつら — No.1641**
- schema: **resetBehavior v0.7**
- status: **2024-04-08_BOUNDARY_OPEN_3_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1640 `スマスロ ゴールデンカムイ` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- main正本の次未処理 No.1641 `Lパチスロうる星やつら` から継続。
- No.1641を性能コア + resetBehavior v0.7で新規登録。
- 2024-04-08群はknown 4候補中3機処理済み。残りは `ストライク・ザ・ブラッド`。

## No.1641 — Lパチスロうる星やつら
- path: `docs/real_machine_db/machines/2024-04-08_l-urusei-yatsura.md`
- manufacturer: **EXCITE製造 / ニューギン販売**
- formalModel: **Lパチスロうる星やつらEV**
- inspectionCode: **3S0160**
- releaseDate: **2024-04-08**
- generation: **6.5号機 / スマスロ**
- systemType: **BONUS+AT / 擬似ボーナス経由型AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- 機械割: **設定1 97.6 / 2 98.9 / 4 103.2 / 5 106.2 / 6 110.1%**（設定L固定値は未公開確認）
- BONUS: **1/266.5 / 1/256.3 / 1/232.9 / 1/216.4 / 1/196.7**
- AT: **1/535.4 / 1/509.0 / 1/429.3 / 1/383.2 / 1/329.9**
- base: **約33.7G/50枚**
- 純増: **BONUS / ATとも約2.6枚/G**
- 電撃BONUS: **約100枚**
- ラムBONUS: **約50枚**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1641 resetBehavior v0.7
- setting change: **有利区間、天井、あたる逃走中スルー回数、内部モード、内部状態、内部ゲーム数RESET。モード再抽選で天国約46.9%。**
- carry over: **有利区間、天井、スルー回数、内部モード、内部状態、内部ゲーム数CARRY_OVER。液晶Gは見た目上0へ。**
- power OFF→ON: **天井、スルー回数、モード、内部状態、有利区間CARRY_OVER。液晶Gは見た目上RESET。**
- game/ceiling: **通常A/B/C最大555G+α、通常D 333G+α、天国111G+α。朝一固定最大天井短縮は確認なし。**
- mode/state: **設定変更で再抽選、天国約46.9%（全設定共通）。通常A/B/C/Dの朝一個別振り分けは公開固定値未確認。内部状態は設定変更RESET / 据え置き・純電断CARRY_OVER。**
- advantageous section: **設定変更RESET / 据え置き・純電断CARRY_OVER。通常遊技中の有利区間RESET時は「あたる激走中」へ移行するが、設定変更時は対象外。**
- morning benefit: **約46.9%で天国→111G+α以内BONUS濃厚。固定天井短縮ではなくモード優遇型。**
- reset detection: **なな徹は調査中。後年整理では朝一「あたるナンパステージ」移行で設定変更濃厚、前日+当日G数/スルー回数挙動が据え置き推測材料。ガックン固定条件/発生率、有利区間ランプ確定判別は再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1641
- 設定変更時天国モード選択率: **約46.9%（全設定共通）**
- 天国天井: **111G+α**
- 通常D天井: **333G+α**
- 通常A/B/C天井: **555G+α**
- 通常A/B/C/Dの設定変更時個別振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- 朝一スルー天井短縮率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / SHORTENING_NOT_CONFIRMED**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes — No.1641
- 性能主要値の競合は今回確認なし。
- 型式表記は業界発表 `Lうる星やつらEV`、HAZUSE `Lパチスロうる星やつらEV` の差があるが、検定番号・メーカー・導入日・性能一致のため同一型式の表記差として保持。
- 設定Lの機械割/初当りは公開固定値未確認のため推測せず欠損。
- 通常遊技中の有利区間RESET恩恵「あたる激走中」約66%は設定変更時対象外なので、朝一恩恵へ混入させていない。

## 2024-04-08境界 — OPEN 3/4 known candidates
1. ジャグラーガールズSS — No.1639 DONE
2. スマスロ ゴールデンカムイ — No.1640 DONE
3. Lパチスロうる星やつら — No.1641 DONE
4. ストライク・ザ・ブラッド — NEXT

境界監査メモ:
- グリーンべると2024-04-08新台スケジュールが上記4パチスロを同日導入予定として掲載。
- HAZUSE新台カレンダーでも2024-04-08を通常導入境界として確認済み。
- `Lうる星やつら` はニューギン直営店で2024-03-13先行導入があるが、全国導入日は2024-04-08としてcanonical保持。
- 4候補処理後にPB・別型式・地域先行・延期/段階導入を再検索し、追加候補がなければ群CLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1641と本handoffを再取得確認。
2. **No.1642候補 `ストライク・ザ・ブラッド` — 2024-04-08** を性能コア + resetBehavior v0.7で登録。
3. 4候補完了後、PB・別型式・地域先行・延期/段階導入を再監査して2024-04-08群をCLOSED判定し、次導入日境界へ進む。
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1641 Lパチスロうる星やつら
- ニューギン公式製品ページ: https://www.newgin.co.jp/pub/machine/s_urusei_yatsura/
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/26867/nippon
- グリーンべると 新台発表: https://web-greenbelt.jp/post-80511/
- グリーンべると / P-WORLD 直営先行導入・全国4/8: https://news.p-world.co.jp/articles/27184/greenbelt
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/3S0160/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10007
- なな徹 機種解析まとめ: https://nana-press.com/kaiseki/machine/727/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/727/19476/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/727/20615/
- なな徹 モード: https://nana-press.com/kaiseki/machine/727/20623/
- 必勝本 モード: https://hisshobon.com/machineinfo/83104/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/83068/
- 必勝本 BONUS: https://hisshobon.com/machineinfo/83101/
- 必勝本 AT: https://hisshobon.com/machineinfo/83080/
- Altema 朝一/電源ON-OFF: https://altema.jp/pachimo/luruseiyatura
- ぽこすろっと 朝一/電源ON-OFF/有利区間: https://www.nankaikoya.jp/uruseiyatsura-kitaichi/
- 回胴に散る リセット検討: https://kaidou.repop.jp/archives/590

### 境界 / 次回候補
- グリーンべると 2024-04-08導入スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
