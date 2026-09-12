更新日: 2026-09-12

## 現在地点
- recordCount: **1468**
- latestRecordAdded: **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_shinseiki-evangelion-tamashii-no-kyoumei.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_5_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1467「聖闘士星矢 冥王復活」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `新世紀エヴァンゲリオン～魂の共鳴～` をNo.1468へ追加。
- 性能コアはSANKYO公式コレクション、P-WORLD、ちょんぼりすた、スロパチクエスト等で照合。設定1〜6（L除く）の機械割97.9〜110.3%、CZ 1/147.4→1/104.0、AT 1/355.1→1/255.3、約32.6G/50枚、純増約3.4枚/Gを保存。
- resetBehavior v0.7では設定変更時の天井・有利区間RESET、据え置き時の天井・有利区間CARRY_OVERを確認。朝一1G目は使徒侵入ステージへ移行。
- 有利区間移行時の公開朝一数値として、弱レア役は使徒侵入99.61% / CZ 0.39%、強レア役はCZ 99.21% / AT 0.79%（別解析では丸めて99.6/0.4、99.2/0.8%）を保存。
- リセット専用の固定天井短縮・明確なリセット優遇は確認されず、解析資料ではリセット恩恵なし。通常の222/333/666G+α（700G+αプレミアム報告）を新規に選択する構造として記録。
- 純電源OFF→ONのみの天井・内部状態・有利区間の直接契約は、電源オンオフ/電断/据え置き等の検索語と解析系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き仕様からの推測転記はしなかった。
- 型式は実機流通/設置表記 `S新世紀エヴァンゲリオン 魂の共鳴N jG` と、2021-09検定通過業界資料 `S新世紀エヴァンゲリオンN 魂の共鳴 jR` に末尾差があるため `CONFLICT` / 履歴差として双方を保持。検定番号は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率、設定変更専用の規定G数天井振り分け率、設定変更時の通常時内部高確/シンクロ状態の直接初期化契約も再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAカーソルは本線優先のため進めず、`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）を維持。

## No.1468 — 新世紀エヴァンゲリオン～魂の共鳴～
- path: `docs/real_machine_db/machines/2022-01-24_shinseiki-evangelion-tamashii-no-kyoumei.md`
- manufacturer: **ビスティ（製造: ジェイビー）**
- formalModel: **jG実機流通表記 / jR検定通過表記 CONFLICT保持**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / AT / CZ突破型 / W-AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **設定1 97.9 / 2 99.1 / 4 102.6 / 5 106.0 / 6 110.3%（L公開値未固定）**
- CZ: **1/147.4 → 1/104.0（設定1→6）**
- AT: **1/355.1 → 1/255.3（設定1→6）**
- baseGamesPer50: **約32.6G/50枚**
- netIncrease: **AT出玉増加区間 約3.4枚/G**
- basicPayout: **AT平均500枚超 / 暴走ボーナス初回30G / 覚醒ボーナス初期100枚**
- normalCeiling: **222 / 333 / 666G+α、700G+αプレミアム報告 / CZ最大5スルー後の次回CZでAT濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_FOR_YARDSTICK**
- confidence: **HIGH_CORE_MEDIUM_HIGH_RESET_MODEL_CONFLICT**

### resetBehavior v0.7 — No.1468
- **設定変更**: 天井・有利区間RESET。朝一1G目は使徒侵入ステージへ。有利区間移行時に成立役でCZ/AT抽選。
- **据え置き**: 天井・有利区間CARRY_OVER。通常時朝一ランプ点灯なら据え置き濃厚材料。
- **純電源OFF→ON**: 本機固有の単独直接契約を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置きから推測転記しない。
- **通常天井**: 222G+α / 333G+α / 基本666G+α。700G+αプレミアム天井報告あり。CZスルー天井2〜5回。
- **リセット天井短縮**: 固定短縮値なし確認。解析上リセット恩恵なし。
- **公開朝一数値**: 有利区間移行時、弱レア役→使徒侵入99.61% / CZ0.39%、強レア役→CZ99.21% / AT0.79%。
- **変更判別**: 通常時有利区間ランプ点灯型。前日通常時点灯を前提に朝一消灯＝設定変更濃厚 / 点灯＝据え置き濃厚。前日AT終了直後や店側対策は例外。
- **ガックン**: 本機固有条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468 / DONE**
6. **アラジンAクラシック — No.1469候補 / NEXT**
7. **南国物語30**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1469候補「アラジンAクラシック」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）**。
- 今回は本線No.1468を優先し、遡及QAは未処理。

## GitHub保存
- No.1468追加 commit: `4fe7b363135c4f2399bb40e1e1b1c1c87e5a907f`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1468 新世紀エヴァンゲリオン～魂の共鳴～
- https://www.sankyo-fever.jp/collection/927/
- https://www.p-world.co.jp/machine/database/9542
- https://chonborista.com/slot/bisty-slot/155156/
- https://www.slopachi-quest.com/article/evangelion-tamasiinokyoumei-settei/
- https://nana-press.com/kaiseki/machine/285/7961/
- https://nana-press.com/kaiseki/machine/285/7573/
- https://slot-seven.com/evangeliontamashiinokyomei-tenzyou/
- https://www.slopachi-quest.com/article/evangelion-tamasiinokyoumei-tenjou/
- https://1geki.jp/slot/s_evangelion_tama/3/
- https://www.nakaiti.com/html/sJB005.html
- https://web-greenbelt.jp/post-51090/
- https://pachinkopachisro.com/archives/56117742.html
