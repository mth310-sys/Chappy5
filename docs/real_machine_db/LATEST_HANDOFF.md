更新日: 2026-09-09

## 現在地点
- recordCount: **1090**
- latestRecordAdded: **SLOTギルティクラウン**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_slot-guilty-crown.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **SLOTギルティクラウン — No.1090**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1089「ぱちスロ PSYCHO-PASS サイコパス」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1089件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「SLOTギルティクラウン」** をNo.1090として登録。
- 性能コア + resetBehavior v0.7を同時収集。メーカー/型式・導入、当時解析、古いDB、P-WORLD、K-Navi、パチ7等を横断し、設定変更/純電断/CZモード/内部状態/RT状態まで確認。
- 据え置き独立契約と確定ガックンは検索語・資料系統変更後も直接固定できず、純電断契約から推測せずUNVERIFIEDとして保存。

## No.1090 — SLOTギルティクラウン
- manufacturer: **エレコ**
- releaseDate: **2017-06-19**
- formalModelName: **SLOTギルティクラウンUC**
- certificationNumber: **7S0351**
- generation/system: **5号機 / 5.5号機 / A+ART / CZ / リアルボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 設定は **1 / 2 / 5 / 6** の4段階。
- 機械割: **98.5 / 101.7 / 108.1 / 111.0%**。
- ART初当たり: **1/498.6 / 1/439.9 / 1/382.3 / 1/339.4**。
- CROWN BIG: **全設定共通1/1985.9**。
- BIG: **1/348.6 / 1/337.8 / 1/318.1 / 1/292.6**。
- ボーナス合算: **1/296.5 / 1/288.7 / 1/274.2 / 1/255.0**。
- 通常時CZ初当たり（ART終了後CZ除く）: **1/282.1 / 1/244.0 / 1/227.6 / 1/196.9**。
- ベース: **約32.1〜32.5G/50枚**。
- ART単体純増: **約1.4枚/G**、ボーナス込み約**2.0枚/G**。
- CROWN BIG **306枚**、BIG **約150枚**、ART **1セット30G+α**。
- 通常天井: **ボーナス＆ART間899G+前兆でCZ**。天井CZ失敗後もART当選までCZ高確率状態。

### resetBehavior v0.7
- 設定変更: **天井RESET / CZモードRESELECT / 内部状態RESELECT / 天王洲第一高校ステージ**。
- 設定変更時CZモード:
  - 設定1・5: **A68.7 / B25.0 / C6.3 / D0%**。
  - 設定2・6: **A50.0 / B37.5 / C12.5 / D0%**。
- 設定変更時内部状態: **低確75.0 / 高確B25.0%**。
- 純電源OFF→ON: **天井/CZモード/内部状態CARRYOVER**。
- 液晶は純電断から2時間以内なら引継ぎ、2時間経過後は天王洲第一高校。
- 設定変更専用天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 高確B25%、CZモードB以上が設定1・5で31.3%、設定2・6で50.0%。
- 朝一不利: 前日天井進捗・CZモード・内部状態は設定変更で消失/再抽選。
- RT状態はパチ7直接表で **設定変更時=引き継ぎ / 純電断時=RT0**。一般則で補正せず `ANALYSIS_SINGLE_DIRECT` として保持。
- RT状態を利用した変更推測の回顧解説あり。ただし本機固有の確定ガックン契約は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical core/reset values.
- 一部二次資料にA+RT表記があるが、ART「ギルティクラウン」搭載・主要解析分類によりcanonicalはA+ART。
- RT朝一契約は直感的な一般挙動と逆向きに見えるため、資料記載を改変せず単一直接資料として保持。
- missing: direct independent stay-setting contract; deterministic gakkun contract.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
- 次の確認済み候補:
  1. **パチスロ リング 終焉ノ刻** — No.1091候補
  2. パチスロ ベン・トー～半額弁当争奪戦!!～
  3. ケロロ軍曹
  4. ドリームジャンボ あの興奮をもう一度
  5. スーパーミラクルジャグラー
  6. ハイパーリノ
- 同日群は全メーカー横断監査を維持し、全件処理後にCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1090を再取得。
2. **1090件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「パチスロ リング 終焉ノ刻」** をNo.1091候補として性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群を一本の時系列キューとして処理し、全メーカー横断監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1090 SLOTギルティクラウン
- HAZUSE: https://hazuse.com/machine/pachislot/7S0351/
- K-Navi: https://p-kn.com/slot/2809/
- パチビー: https://www.pachibee.jp/machines/lecture/217050017
- 一撃 基本: https://1geki.jp/slot/s_guiltycrown/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_guiltycrown/3/
- 一撃 CZモード: https://1geki.jp/slot/s_guiltycrown/45/
- 一撃 ART: https://1geki.jp/slot/s_guiltycrown/81/
- 一撃 ボーナス: https://1geki.jp/slot/s_guiltycrown/61/
- 一撃 設定判別/CZ: https://1geki.jp/slot/s_guiltycrown/5/
- P-WORLD: https://www.p-world.co.jp/machine/database/8395
- パチ7 朝一/天井: https://pachiseven.jp/machines/5182/cutout/78
- パチ7 RT状態/リセット判別回顧: https://pachiseven.jp/articles/detail/11434
- すろかい: https://slotkaiseki.hatenablog.com/entry/gc

### 6月19日群
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
