更新日: 2026-09-09

## 現在地点
- recordCount: **1091**
- latestRecordAdded: **パチスロ リング 終焉ノ刻**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_ring-shuen-no-koku.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **パチスロ リング 終焉ノ刻 — No.1091**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1090「SLOTギルティクラウン」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1090件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「パチスロ リング 終焉ノ刻」** をNo.1091として登録。
- 性能コア + resetBehavior v0.7を同時収集。HAZUSE、一撃、期待値見える化、すろぱちくえすと、ちょんぼりすた、pacnkを横断し、型式/検定番号、初当たり、機械割、ベース、ART性能、天井、設定変更/純電断、モード再抽選、スルー回数天井まで確認。
- 一撃2017-07-12時点では設定変更/純電断が「調査中」だが、後発解析2系統で直接契約と数値が一致するため、CONFLICTではなく `PUBLICATION_TIME_DIFFERENCE` として保持。
- 据え置き独立契約、設定変更時内部状態の具体的振り分け、確定ガックン、朝一液晶ステージは検索語・資料系統変更後も十分に固定できず、推測せずUNVERIFIEDとして保存。

## No.1091 — パチスロ リング 終焉ノ刻
- manufacturer: **藤商事**
- releaseDate: **2017-06-19**
- formalModelName: **リング 終焉ノ刻FSA**
- certificationNumber: **6S1721**
- generation/system: **5号機 / 5.5号機 / ART / 疑似ボーナス / CZ / ゲーム数管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.1 / 99.3 / 101.8 / 104.6 / 107.6 / 111.9%**。
- 貞子ボーナス初当たり: **1/352.3 / 1/334.7 / 1/318.9 / 1/295.8 / 1/271.1 / 1/249.7**。
- ART「呪縛RUSH」初当たり: **1/728.5 / 1/691.3 / 1/616.1 / 1/544.0 / 1/475.8 / 1/394.7**。
- CZ「召魂ゾーン」初当たり: **1/356.1 / 1/336.4 / 1/297.8 / 1/272.8 / 1/244.7 / 1/226.3**。
- ベース: **45.7G/50枚**（全設定、一撃精密値）。
- ART純増: **約2.0枚/G**。
- ART: **1セット40G+α**、継続率約50〜85%。
- 貞子BONUS: **51 / 71 / 91 / 101G**、ART期待度約40%。
- モード別天井: **通常A 1152G / 通常B 1216G / 天国120G以内**。
- ART非当選貞子BONUSは最大10回目でART確定のスルー回数天井あり。

### resetBehavior v0.7
- 設定変更: **ゲーム数天井RESET / スルー回数RESET・再抽選 / 内部モードRESELECT / 内部状態RESET・RESELECT**。
- 純電源OFF→ON: **ゲーム数天井 / スルー回数 / 内部モード / 内部状態をCARRYOVER**。
- 据え置き独立契約: **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。純電断契約から推測しない。
- 設定変更時モード:
  - 設定1・3・5: **通常A62.50 / 通常B25.00 / 天国12.50%**。
  - 設定2・4・6: **通常A52.34 / 通常B35.16 / 天国12.50%**。
- モードB以上: 設定1・3・5 **37.50%** / 設定2・4・6 **47.66%**。
- 天国スタート: **全設定12.50%**。選択時は120G以内の貞子BONUS当選濃厚。
- 設定変更専用の固定ゲーム数短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット時スルー回数天井振り分け: **1回1.56 / 2回0.39 / 3回0.39 / 4回0.39 / 5回4.69 / 6回0.39 / 7回4.69 / 8回0.39 / 9回0.39 / 10回86.72%**。
- 内部状態の設定変更時具体的振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更推測: レア役非経由で**80G付近から真相究明モード**なら設定変更可能性UP。ただし確定ではない。
- 本機固有の確定ガックン/ランプ: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical performance core/reset numeric values.
- 一撃の2017-07-12時点「設定変更/電源OFF ON＝調査中」と後発解析の直接契約は `PUBLICATION_TIME_DIFFERENCE`。
- 「通常時1216G天井」と「通常A1152 / 通常B1216 / 天国120」は最大天井簡略表記とモード別詳細の差でありCONFLICT扱いしない。
- missing: direct independent stay-setting contract; reset internal-state numeric distribution; deterministic gakkun/lamp contract; morning display-stage contract.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
  3. パチスロ リング 終焉ノ刻 — No.1091
- 次の確認済み候補:
  1. **パチスロ ベン・トー～半額弁当争奪戦!!～** — No.1092候補
  2. ケロロ軍曹
  3. ドリームジャンボ あの興奮をもう一度
  4. スーパーミラクルジャグラー
  5. ハイパーリノ
- 同日群は全メーカー横断監査を維持し、全件処理後にCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1091を再取得。
2. **1091件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「パチスロ ベン・トー～半額弁当争奪戦!!～」** をNo.1092候補として性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群を一本の時系列キューとして処理し、全メーカー横断監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1091 パチスロ リング 終焉ノ刻
- HAZUSE: https://hazuse.com/machine/pachislot/6S1721/
- 一撃 基本: https://1geki.jp/slot/s_ring2/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_ring2/3/
- 一撃 設定判別: https://1geki.jp/slot/s_ring2/5/
- 一撃 50枚ベース: https://1geki.jp/slot/s_ring2/4/
- 一撃 ART: https://1geki.jp/slot/s_ring2/81/
- 一撃 貞子BONUS抽選: https://1geki.jp/slot/s_ring2/63/
- 期待値見える化: https://slotjin.com/zone/ring2/
- すろぱちくえすと: https://www.slopachi-quest.com/article/the-ring-shuuennotoki/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/37388/
- pacnk: https://pacnk.com/slot/tools/sh_ringushuennokoku.html

### 6月19日群
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
