更新日: 2026-09-13

## 現在地点
- recordCount: **1512**
- latestRecordAdded: **政宗 戦極 — No.1512**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-08-08_masamune-sengoku.md`
- chronologicalFrontier: **2022-08-08**
- frontierLatestMachine: **政宗 戦極 — No.1512**
- schema: **resetBehavior v0.7**
- status: **2022-08-08_GROUP_OPEN_2_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1511 `パチスロ 新鬼武者2` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種No.1512 `政宗 戦極` を性能コア＋resetBehavior v0.7で追加。
- No.1512処理後に2022-08-08群を再監査した結果、前回handoffの既知2機に加えてNETの25φ派生 `チバリヨ-25` が同日導入候補として確認された。漏れ防止を優先し、群を2/2で閉じず **2/3 OPEN** に修正。
- `チバリヨ-25` は既存30φ機と同名シリーズでも25φ別機種として掲載されているため、次回に型式・性能同一性/差分を照合して独立レコード化可否を判定する。
- 2022-08-22の次群候補として `パチスロ閃乱カグラBURST UP` を確認済み。ただし8/8群を閉じるまで先へ飛ばさない。

## No.1512 — 政宗 戦極
- path: `docs/real_machine_db/machines/2022-08-08_masamune-sengoku.md`
- manufacturer: **大都技研**
- formalModel: **S政宗 戦極A5**
- inspectionCode: **2S0357**
- releaseDate: **2022-08-08**
- generation/system: **6.5号機 / ゲーム数上乗せ型AT**
- payoutRate: **設定1 97.7 / 2 98.9 / 4 103.1 / 5 105.1 / 6 107.0%**
- CZ初当り: **1/156.7 → 1/91.3**
- AT設定別初当り: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- baseGamesPer50: **約34G/50枚**
- netIncrease: **AT約2.4枚/G**
- basicPayout: **AT初当り時は必ず秀吉決戦から開始 / 青7ごと30〜300G上乗せ / AT終了時は戦極15G・引戻し期待約50%**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_DIRECT_RESET_NUMBERS**
- confidence: **INDUSTRY_HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1512
- **設定変更**: 有利区間・天井・内部状態・兵力・決戦ポイントRESET。初期兵力/決戦ptと一騎駆けテーブルを再抽選。
- **据え置き**: 有利区間・天井・内部状態・兵力・決戦ptをCARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モード/テーブル進行などをCARRY_OVER。朝一表示は内部値をマスクするため表示と内部進行を分離。
- **天井**: CZ間500G / CZ最大6スルー後7回目成功濃厚 / 戦極最大3スルー後4回目AT濃厚 / AT間最大2000G+α。
- **設定変更時AT間天井**: 500G or 1000G側が合算50%、2000Gが50%。500/1000個別比率はUNVERIFIED_AFTER_RESEARCH。
- **モード/テーブル**: 設定変更時に再抽選。設定変更時・AT終了後戦極失敗時のC以上合算は設定1 29.7 / 2 35.94 / 4 42.2 / 5 52.36 / 6 62.50%。
- **状態**: 設定変更でRESET、据え置き/純電断CARRY_OVER。設定変更直後の通常/高確/超高確個別振り分けはUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。有利区間ランプ非搭載で朝一ランプ判別不可。
- **朝一恩恵**: AT間500/1000G側合算50%＋初期兵力/決戦pt再抽選＋一騎駆けテーブル再抽選。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 朝一兵力は設定変更/据え置きとも内部ptに関係なく白系/非表示状態で即判別困難。ただし据え置きは兵力内部ptを引継ぐため、前日の残りptが既知なら100pt到達タイミングが判別材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: AT間500G or 1000G合算50% / 2000G 50%、設定変更時テーブルC以上 29.7〜62.50%。

## 2022-08-08群 — OPEN 2/3 known
1. `パチスロ 新鬼武者2` — **No.1511 処理済み**
2. `政宗 戦極` — **No.1512 処理済み**
3. `チバリヨ-25` — **No.1513候補 / 未処理（群再監査で追加発見）**

群監査メモ:
- 遊技日本/P-WORLDで新鬼武者2・政宗 戦極の2022-08-08全国導入を確認。
- ALL7 2022年8月導入一覧および1geki NET機種一覧で `チバリヨ-25` の2022-08-08導入を確認。
- `チバリヨ-25` は25φ派生として独立掲載。次回、既存30φ版との型式・スペック・リセット特性の同一性/差異を一次/解析資料で照合する。
- 次群候補は2022-08-22 `パチスロ閃乱カグラBURST UP`。8/8群CLOSED監査完了までは進めない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線8/8群を前進したため、遡及QAカーソルは変更しない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）**。

## 次回本線の再開地点
- **No.1513候補 `チバリヨ-25`**。
- 型式/25φ差分/性能同一性を確認して処理後、2022-08-08群をPB・地域先行・延期・別型式まで再監査しCLOSED可否を判定する。
- 群がCLOSEDなら次は2022-08-22候補 `パチスロ閃乱カグラBURST UP` へ前進する。

## GitHub保存
- No.1512追加 commit: `4373f0296d69b6c2f4b307d185c2564bc21942c8`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1512 政宗 戦極
- https://yugi-nippon.com/pachinko-new-machine/post-53141/
- https://news.p-world.co.jp/articles/20957/nippon
- https://news.p-world.co.jp/articles/20965
- https://hazuse.com/machine/pachislot/2S0357/
- https://hazuse.com/machine/pachislot/2S0357/genre/207/
- https://hazuse.com/machine/pachislot/2S0357/genre/203/
- https://nana-press.com/kaiseki/machine/391/11454/
- https://www.slopachi-quest.com/article/masamune-sengoku-tenjou/
- https://1geki.jp/slot/s_masamune_sngk/47/
- https://pachiseven.jp/machines/6579/cutout/4
- https://nana-press.com/kaiseki/machine/391/10614/

### 2022-08-08群再監査 / 次機種
- https://www.all7.jp/plans/index/2022/08/
- https://1geki.jp/maker/net/
- https://news.p-world.co.jp/articles/21319/greenbelt
- https://news.p-world.co.jp/articles/21494/greenbelt
