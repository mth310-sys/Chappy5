更新日: 2026-09-09

## 現在地点
- recordCount: **1095**
- latestRecordAdded: **スーパーミラクルジャグラー**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_super-miracle-juggler.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **スーパーミラクルジャグラー — No.1095**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1094「ドリームジャンボ あの興奮をもう一度」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1094件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「スーパーミラクルジャグラー」** をNo.1095として登録。
- 北電子公式、HAZUSE、Re.design、K-Navi、一撃、すろぱちくえすと、期待値見える化、ジャグラー系後発解析を横断し、型式、検定番号、導入日、設定別機械割、BIG/REG、獲得枚数、50枚ベースの公開レンジ、朝一ガックン、特殊BGM条件の設定変更/純電断差を固定。
- 公称機械割とフル攻略/推定機械割は定義差のため平均せず分離。canonicalは公称96.0〜108.1%。
- exact setting-specific baseGamesPer50とメーカー公式resetBehavior文書は再探索後も固定できずUNVERIFIEDとして保存。

## No.1095 — スーパーミラクルジャグラー
- manufacturer: **北電子**
- releaseDate: **2017-06-19**
- formalModelName: **スーパーミラクルジャグラー／KU**
- certificationNumber: **6S0391**
- generation/system: **5号機 / ノーマルAタイプ / BIG+REG**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 公称機械割: **96.0 / 97.8 / 99.5 / 102.0 / 104.5 / 108.1%**。
- BIG: **1/282.5 / 1/273.1 / 1/268.6 / 1/256.0 / 1/251.1 / 1/230.8**。
- REG: **1/468.1 / 1/431.2 / 1/372.4 / 1/341.3 / 1/304.8 / 1/332.7**。
- 合算: **1/176.2 / 1/167.2 / 1/156.0 / 1/146.3 / 1/137.7 / 1/136.2**。
- ベース: **約34〜37G/50枚**の後発横断資料レンジ。設定別精密値はUNVERIFIED。
- BIG: **純増312枚**、REG: **純増104枚**。
- 天井: **NOT_APPLICABLE_NO_CEILING**。

### resetBehavior v0.7
- 設定変更: 天井/ゲーム数モード非搭載。**ボーナス終了後5G以内BIGの特殊BGM条件はRESET**。
- 据え置き: 前日がボーナス後即ヤメ等で特殊BGM条件を保持していれば朝一へ持ち越し得る。
- 純電源OFF→ON: すろぱちくえすとの直接比較表で **BGM変化条件CARRYOVER**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- mode/state: classic AT/ART型のゲーム数モード・低確高確はNOT_APPLICABLE。朝一専用当選優遇はNONE_CONFIRMED。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: **朝一1G目ガックン＝設定変更濃厚**。ただし1G回し等で対策可能なため確定扱いしない。
- BGM補助判別: 前日条件が成立しており朝一5G以内BIGで「きらきら星変奏曲」「ワルキューレの騎行」「カノン」が流れれば据え置き濃厚。設定変更時は条件RESET。

## conflicts / missing
- payoutRateDefinition: 公称96.0〜108.1%と、攻略打ち前提の推定/フル攻略約96.5〜109.6%、97.1〜109.7%等は定義差。平均せず公称値をcanonical化。
- baseGamesPer50: 約34〜37Gレンジ資料あり。設定別精密値はUNVERIFIED_AFTER_RESEARCH。
- manufacturerOfficialResetBehavior: UNVERIFIED_AFTER_RESEARCH。朝一挙動は複数解析/動画検証ベース。
- deterministicResetDetection: NOT_AVAILABLE_DUE_COUNTERMEASURES_AND_CONDITIONS。

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
  3. パチスロ リング 終焉ノ刻 — No.1091
  4. パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092
  5. ケロロ軍曹 — No.1093
  6. ドリームジャンボ あの興奮をもう一度 — No.1094
  7. スーパーミラクルジャグラー — No.1095
- 次の確認済み候補: **ハイパーリノ** — No.1096候補。
- ハイパーリノ処理後、すろぱちくえすと2017一覧、K-Navi、メーカー別一覧等で全メーカー横断監査し、6/19群のCLOSE可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1095を再取得。
2. **1095件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「ハイパーリノ」** をNo.1096候補として性能コア + resetBehavior v0.7で処理。
4. その後、2017-06-19群を全メーカー横断監査してCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1095 スーパーミラクルジャグラー
- 北電子公式: https://www.kitadenshi.co.jp/products/2017/smj/
- 北電子製品一覧: https://www.kitadenshi.co.jp/slot/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0391/
- Re.design: https://www.redesign777.tokyo/Spec/SlotView?flag=0&id=S2017040613283501
- すろぱちくえすと: https://www.slopachi-quest.com/article/supermiraclejuggler/
- K-Navi: https://p-kn.com/slot/2777/
- 一撃: https://1geki.jp/slot/s_supermiracle_juggler/
- 期待値見える化: https://slotjin.com/slot-tool/miracle-juggler/
- ジャグラー横断資料: https://www.pachislotblog.tokyo/juggler-series-specmatome/
- ジャグラー7: https://juggler7.com/supermiracle/
