# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **347件地点 / 2009-02-22 ダッシュ勝平**。
- 2009-02-23〜02-28を具体日で再監査したが、今回追加可能な未処理5号機を安全に確定できなかったため、次の具体日確認済み群である2009-03-01へ進行。
- 当時グリーンべるとで **2009-03-01納品開始予定**を直接確認した `タコスロ7R` を **348件目**に追加。
- **既存348件の再追加禁止。**

## 348. タコスロ7R

record:
- `docs/real_machine_db/machines/2009-03-01_tacoslo-7r.md`

要点:
- formalModelName: **タコスロ3**
- manufacturer: **アルゼ**
- releaseDate: **2009-03-01（納品開始予定）**。必勝本3/2導入開始予定、パチビー3/3導入、ユニバーサル公式2009年2月発売は定義差として保持。
- generation: **5号機**
- systemType: **ボーナス+RT / CZ / 次回ボーナスまでRT / 天井RT / 技術介入要素あり**
- settings: **1 / 4 / 6 / H**
- BIG: **1/343.12 / 1/312.08 / 1/278.88 / 1/251.10**。
- REG/TACO: **1/478.36 / 1/417.43 / 1/346.75 / 1/288.70**。
- 合算: **1/199.80 / 1/178.57 / 1/154.57 / 1/134.30**。
- 50枚ベース: **35.05 / 35.50 / 35.97 / 36.45G**。
- BIG約**312枚**、REG約**112枚**。
- RT `つぼつぼタイム`: **次回ボーナスまで / 約+0.2枚/G**。
- 全ボーナス後にCZ `つぼよけゾーン`。BIG後50G、REG後3G。
- 天井はCZ終了後1000Gで次回ボーナスまでRT。起算表現に資料差あり。
- `coreStatus=COMPLETE_CORE_WITH_CONFLICTS`。

### 機械割CONFLICT

- 市場掲載系列（P-WORLD/K-Navi/当時DB）: **97.3 / 100.5 / 106.3 / 113.0%**。
- パチ&スロ必勝本シミュレート: **98.32 / 102.45 / 107.42 / 112.76%**。
- 平均せず別系列保持。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CEILING_COUNTER_NOT_RESET_CONFIRMED**。P-WORLD/パチビーが設定変更後も天井までのゲーム数はリセットされないと明記。
- `carryOverBehavior`: **CEILING_COUNTER_CARRY_OVER_EFFECTIVELY_SUPPORTED_BUT_POWER_CYCLE_DETAIL_UNVERIFIED**。設定変更でも天井G数が残ることは直接確認。ただし据え置き時のCZ/RT残状態全般は直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井G/CZ/RT状態処理は本機固有の直接資料未確定。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: **NO_RESET_SHORTENING_CONFIRMED / CEILING_COUNTER_CARRIES_OVER_ON_SETTING_CHANGE**。
- `modeAfterReset`: **NO_RESET_SPECIFIC_MODE_CONFIRMED_AFTER_RESEARCH**。復刻モードは演出選択機能であり朝一内部モードではない。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。CZ/RT滞在状態等の保持/初期化は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **CEILING_CARRYOVER_ON_SETTING_CHANGE_CONFIRMED**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **DIRECT_DETECTION_UNVERIFIED**。ガックン/初期出目/ランプ等の直接判別資料未確定。
- 公開朝一専用当選率、リセット専用モード振分、恩恵発生率は確認なし。

主要出典（取得日 2026-09-02）:
- https://www.universal-777.com/product/slot/tacoslo_7r/
- https://web-greenbelt.jp/00002955/
- https://www.p-world.co.jp/machine/database/5452
- https://www.pachibee.jp/machines/index/209080005
- https://p.hisshobon.jp/machine/1323/1/20102
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aruze_slot/06/c.php
- https://p.hisshobon.jp/machine/1323/1/19890
- https://w.atwiki.jp/5gouki/pages/155.html

## 2009-02末〜03-01境界監査

- 2/22 `宇宙刑事ギャバン` は既存344。
- 2/22 `ラブゲッCHU` は既存345。
- 2/22 `スーパーリアル麻雀` は既存346。
- 2/22 `ダッシュ勝平` は既存347。
- 2/23〜2/28は、今回の具体日監査では安全に新規追加できる未処理5号機を確定できず。
- 3/1 `タコスロ7R` を今回348として追加。当時グリーンべるとが3/1納品開始予定を明記。
- 3/1 `バトルアスリーテス大運動会` はグリーンべると2009-01-16記事で **型式バトルアスリーテスZ / 3月1日納品開始予定**を直接確認済み。次回最優先候補。
- 2/22以前の月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日未確定。具体日が判明し2/22以前なら正しい位置へ遡及追加する。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準348件地点。2009-03-01 タコスロ7Rまで接続済み。既存348件の再追加禁止。**
2. 同日群の **ニューギン `バトルアスリーテス大運動会`（型式バトルアスリーテスZ）** を最優先で処理する。グリーンべるとで2009-03-01納品開始予定を直接確認済み。
3. 同機処理後、2009-03-01同日群の残りと3/2以降を具体日順で監査する。発表日/発売月を導入日と誤認しない。
4. 2/22以前の月単位候補は具体日探索を継続し、過去位置が明確に確定した場合のみ遡及挿入する。
5. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
6. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 348 タコスロ7R: `9bfe2d554093adcd23586bc4fa1d2d803cd5bfe4`
