# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **615**
- latestMachineAdded: **必勝金閣寺物語～古都絢爛～**（高砂電器産業 / TAKASAGO）
- latestRecord: `docs/real_machine_db/machines/2011-11-07_hissho-kinkakuji-monogatari-koto-kenran.md`
- chronologicalFrontier: **2011-11-07**
- frontierLatestExactDateMachine: **必勝金閣寺物語～古都絢爛～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE_2011-11-07_SAME_DAY_GROUP**

## 今回の本線追加 — 必勝金閣寺物語～古都絢爛～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「押忍！番長2」を再取得して開始。
- 開始時正本は **recordCount 614 / chronologicalFrontier 2011-10-24**。INDEXは旧19件地点のままなので、README規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の **2011-10-25〜2011-11-06境界**を再監査。先行して処理すべき強い未登録5号機候補を確認できなかったため、次の強いアンカー **2011-11-07**へ前進。
- repo code searchで「必勝金閣寺物語」未検出。想定パス `docs/real_machine_db/machines/2011-11-07_hissho-kinkakuji-monogatari-koto-kenran.md` を直接fetchして404を確認し、未登録と判断。
- K-Naviはホール導入開始 **2011-11-07**、グリーンべるとは納品11月7日開始、パチ＆スロ必勝本も2011/11/7導入で一致。

### 性能コア

- 5号機 / ボーナス+ART / ST型継続ART / 無限ART併用。
- 型式: **キンカクジモノガタリ**、検定番号: **1S0722**。
- 機械割主系列: **95.9 / 98.4 / 101.5 / 104.7 / 108.7 / 113.2%**。K-Naviとパチ＆スロ必勝本で一致。
- HAZUSEは **96 / 98 / 102 / 105 / 109 / 109%** を掲載。設定1〜5は丸め差候補だが設定6が113.2%対109%で大きく競合するためCONFLICT保持。
- ボーナス合算: **1/99.75 / 1/99.30 / 1/98.85 / 1/98.40 / 1/97.96 / 1/97.52**。
- ART初当たり: **約1/706 / 1/669 / 1/616 / 1/559 / 1/497 / 1/443**。
- 金七: **1/1456.36 → 1/1092.27**、紅七: **1/225.21 → 1/204.16**、九山八海: 設定1 **1/204.16** → 設定6 **1/225.21**。
- 50枚ベース: **約29.87G/50枚**（パチマガスロマガの「1000円あたり29.87G」直接値）。
- ART純増: **約+1.5枚/G**。
- 銀閣寺モード100G、スーパー銀閣寺モード150G、金閣寺モードは次回ボーナスまでの無限ART。
- ボーナスは3種類とも **約48枚**。
- 通常天井: **通常状態777Gで金閣寺モード1セット**。
- ARTスルー回数天井: **最大20回ボーナス→ART非当選でART確定**。
- coreStatus: **COMPLETE_CORE_WITH_PAYOUT_CONFLICT**。

### resetBehavior v0.7

- `settingChangeBehavior`: **CEILING_GAME_COUNT_RESET / LOW_PROBABILITY_MODE_START / RT_STATE_RESET / SPRING_DAY_STAGE_START_CONFIRMED**。パチ＆スロ必勝本の専用「設定変更&天井情報」で直接確認。
- `gameCounterReset`: **777G_CEILING_COUNTER_RESET_CONFIRMED**。設定変更で天井ゲーム数リセット。
- `ceilingAfterReset`: **777G / NO_RESET_ONLY_SHORTENING_CONFIRMED**。設定変更専用短縮天井は確認なし。
- `modeAfterReset`: **LOW_PROBABILITY_MODE_START_CONFIRMED**。
- `stateAfterReset`: **LOW_PROBABILITY_START_AND_RT_RESET_CONFIRMED**。
- `resetBenefits`: **NONE_CONFIRMED_AS_DEDICATED_ADVANTAGE**。
- `resetPenalties`: **PREVIOUS_777G_PROGRESS_LOST / LOW_PROBABILITY_START_CONFIRMED**。
- `resetDetection`: **SPRING_DAY_STAGE_AFTER_SETTING_CHANGE_REFERENCE / DIRECT_SPECIFICITY_UNVERIFIED_AFTER_RESEARCH**。設定変更後は春・昼ステージだが、単純電源OFF→ONとの識別性は未確定。
- ARTスルー20回天井の回数カウンタについて、当時系回顧資料に「宵越し×」はあるが高信頼直接本文不足のため **UNVERIFIED_AFTER_RESEARCH** と分離。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- resetQaStatus: **COMPLETE_RESET_CORE_WITH_CARRYOVER_POWER_CYCLE_AND_DIRECT_DETECTION_UNVERIFIED**。

### CONFLICT / 定義差

1. 機械割はK-Navi/必勝本 **95.9〜113.2%** とHAZUSE **96〜109%**。設定6差が大きいため平均せずCONFLICT。
2. ARTスルー天井はP-WORLD/パチマガスロマガが「最大20回で確定」、必勝本は5/10/15/20回等の段階抽選率を掲載。途中抽選を含む表現差として保持。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 615 / chronologicalFrontier 2011-11-07**から開始。
2. **2011-10-25〜2011-11-06境界は今回監査済み**。強い未登録候補を確認できなかったため閉じる。
3. 2011-11-07同日群はまだ未完。確認済み未処理候補は **ストリートファイターIV（エンターライズ） / キャッツ・アイ-恋ふたたび（オリンピア）**。
4. 次回はまず **ストリートファイターIV** のrepo重複確認・想定実パス直接fetch・導入日再照合を行い、未登録なら616件目候補として処理。
5. その後 **キャッツ・アイ-恋ふたたび** を処理し、11/7同日群を閉じる前にK-Navi・メーカー別一覧・当時業界記事で同日漏れを最終監査。
6. repo code searchだけで未登録判定せず、表記揺れ・想定実パス直接fetch・tree実パスを確認する。
7. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### 必勝金閣寺物語～古都絢爛～
- K-Navi: `https://p-kn.com/slot/1501/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1913/1/31624`
- パチ＆スロ必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1913/1/31628`
- グリーンべると: `https://web-greenbelt.jp/00002311/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/02/a.php`
- パチマガスロマガ 小役/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/02/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6492`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0722/`
- 当時系回顧資料（宵越し補助）: `https://macerate.seesaa.net/article/226312110.html`

### 次回順序確認
- K-Navi ストリートファイターIV: `https://p-kn.com/slot/1522/`
- パチビー ストリートファイターIV: `https://www.pachibee.jp/machines/about/211090008`
- キャッツ・アイ-恋ふたたび: 次回repo未登録確認後に一次/解析系URLを確定する。
