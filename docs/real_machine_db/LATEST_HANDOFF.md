更新日: 2026-09-09

## 現在地点
- recordCount: **1096**
- latestRecordAdded: **ハイパーリノ**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_hyper-rino.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **ハイパーリノ — No.1096**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-06-20_TO_2017-07-02_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1095「スーパーミラクルジャグラー」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1095件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「ハイパーリノ」** をNo.1096として登録。
- 山佐公式、P-WORLD、グリーンべると、パチビー、必勝本、すろぱちくえすと、ちょんぼりすた、K-Navi、一撃、古い解析/型式資料を横断。型式、検定番号、導入日、1段階設定、打ち方別機械割、BIG/REG、ベース、獲得枚数、天井非搭載を固定。
- resetBehaviorは本機が設定Yのみの1段階設定かつ天井/AT/ART/CZ/ゲーム数解除モード非搭載である点を基礎に整理。設定変更専用の天井短縮・朝一モード・高確・初当たり優遇はNOT_APPLICABLE/NONE_CONFIRMED。純電源OFF→ONの本機固有朝一恩恵/不利、確定的ガックン等は表記揺れ・型式・メーカー・シリーズとリセット系検索語を変更して再探索したが直接契約を固定できず、推測補完しない。
- すろぱちくえすと2017導入一覧は6/19を8機掲載し、今回までに8機すべて登録済み。K-Navi 2017年6月全国一斉導入カレンダーも6/19のパチスロ8機が一致し、6/20〜月末に別の全国導入パチスロ日を掲載していない。次の複数資料一致群は2017-07-03。よって6/19群と6/20〜7/2境界を今回の調査範囲でCLOSEDとした。

## No.1096 — ハイパーリノ
- manufacturer: **山佐**
- releaseDate: **2017-06-19**
- formalModelName: **ハイパーリノ／CC**
- certificationNumber: **7S0309**
- generation/system: **5号機 / ノーマルAタイプ / BIG+REG / 1段階設定 / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 設定: **設定Yのみ**。
- BIG: **1/199**、REG: **1/199**、合算: **約1/99〜1/99.5**。
- 完全攻略機械割: **101.00%**。
- 打ち方別: 通常時フリー+ボーナスMAX **97.80%** / 市場想定 **97.01%** / 中押しフリー **95.37%** / 左押しフリー **94.07%**。定義差なので平均しない。
- ベース: **約25G/50枚**。
- BIG: **最大307枚**、REG: **最大90枚**。
- 天井: **NOT_APPLICABLE_NO_CEILING**。

### resetBehavior v0.7
- settingChangeBehavior: **NOT_APPLICABLE_SINGLE_SETTING_MACHINE**（設定Yのみ）。同一設定の設定キー初期化による本機固有公開契約はUNVERIFIED_AFTER_RESEARCH。
- carryOverBehavior: 天井・ゲーム数解除モード非搭載。宵越し天井狙いはNOT_APPLICABLE。朝一期待値を変える公開専用モード/ポイント引継ぎはNONE_CONFIRMED。
- powerCycleBehavior: 天井/ゲーム数モード/AT・ART状態はNOT_APPLICABLE。純電断だけで生じる公開朝一恩恵/不利はNONE_CONFIRMED_AFTER_RESEARCH。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- mode/state: classicゲーム数モード・低確高確は**NOT_APPLICABLE**。朝一専用優遇はNONE_CONFIRMED。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有の確定的ガックン/表示判別は再探索後も**NONE_CONFIRMED_AFTER_RESEARCH**。1段階設定機のため高低設定変更推測の実益自体がNOT_APPLICABLE。

## conflicts / missing
- payoutRateDefinition: 101.00 / 97.80 / 97.01 / 95.37 / 94.07%は攻略手順差。CONFLICTではなく定義別系列として保持。
- bonusCombined: 約1/99と1/99.5は丸め精度差。
- releaseDate: 2017-06-18は業界記事の納品開始、2017-06-19は全国導入開始。イベント定義差。
- manufacturerOfficialResetBehavior: UNVERIFIED_AFTER_RESEARCH。
- sameSettingInitializationBehavior: UNVERIFIED_AFTER_RESEARCH_AND_NOT_MATERIAL_FOR_SETTING_SELECTION_GAMEPLAY。
- deterministicResetDetection: NONE_CONFIRMED_AFTER_RESEARCH。

## 2017-06-19群 — CLOSED
登録済み8機:
1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
2. SLOTギルティクラウン — No.1090
3. パチスロ リング 終焉ノ刻 — No.1091
4. パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092
5. ケロロ軍曹 — No.1093
6. ドリームジャンボ あの興奮をもう一度 — No.1094
7. スーパーミラクルジャグラー — No.1095
8. ハイパーリノ — No.1096
- すろぱちくえすと2017導入一覧とK-Navi 2017年6月全国一斉導入カレンダーの6/19パチスロ群がこの8機で一致。
- **2017-06-20〜2017-07-02境界もCLOSED_FOR_CURRENT_RESEARCH**。次の本線群は2017-07-03。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1096を再取得。
2. **1096件 / 2017-06-19群CLOSED / 6/20〜7/2境界CLOSED** を正本として継続。
3. 次の未処理 **「パチスロ アクエリオンEVOL」** をNo.1097候補として性能コア + resetBehavior v0.7で処理。
4. 2017-07-03群の確認済み候補: **悪魔城ドラキュラ Lords of Shadow / そらのおとしものフォルテ / 閃乱カグラ / エイリヤンエボリューション / しすくえパラダイス / SHAKE III SIDE-A / 熊酒場2丁目店**。順次処理後、同日全メーカー横断監査。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1096 ハイパーリノ
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_hrn/
- P-WORLD: https://www.p-world.co.jp/machine/database/8402
- パチビー: https://www.pachibee.jp/machines/index/217060000
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9394/greenbelt
- 必勝本: https://p.hisshobon.jp/machine/2987/1/64206
- すろぱちくえすと: https://www.slopachi-quest.com/article/hyper-rino-yamasa/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/40600/
- K-Navi: https://p-kn.com/slot/2826/
- 一撃: https://1geki.jp/slot/s_hyperrino/
- イニシャルP型式照合補助: https://initialp.cart.fc2.com/ca19/2623/

### 同日群 / 次境界監査
- すろぱちくえすと 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- K-Navi 2017年6月新台導入カレンダー: https://p-kn.com/calendar/201706/
- K-Navi アクエリオンEVOL: https://p-kn.com/slot/2800/
