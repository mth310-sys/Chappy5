# No.1216 パチスロ ルパン三世 世界解剖

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ルパン三世 世界解剖
- manufacturer: オリンピア
- releaseDateCanonical: 2018-07-30
- generation: 5号機 / 5.9号機期
- systemType: ノーマルタイプ（特殊） / CZ + MB超高確率状態「ヒーローズロード」
- formalModelName: `ルパン三世世界解剖／K1`
- certificationNumber: `7S1878`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`ルパン三世世界解剖／K1`・検定番号`7S1878`と紐づけて導入開始日2018-07-30を掲載。
- パチビー、ちょんぼりすた、すろぱちくえすと、パチ7、P-WORLDでも2018-07-30導入で一致。
- 一部資料は「全国導入は8月6日〜」と補足するが、本DBのcanonicalは最初の導入開始日2018-07-30とする。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_MODEL_ID_AND_MULTIPLE_SOURCES`。

## performanceCore

### payoutRateBySetting
- setting1: 97.3%
- setting2: 98.3%
- setting5: 104.2%
- setting6: 112.4%
- 複数解析資料で一致。完全攻略時表記を採用。

### initialHitBySetting
ヒーローズロード（HR）初当たり:
- setting1: 1/283.5
- setting2: 1/267.8
- setting5: 1/249.1
- setting6: 1/232.5

CZトータル（補助）:
- setting1: 1/65.8
- setting2: 1/67.7
- setting5: 1/73.7
- setting6: 1/82.7

### baseGamesPer50
- setting1: 40.9G/50枚
- setting2: 41.3G/50枚
- setting5: 42.4G/50枚
- setting6: 43.9G/50枚
- パチマガスロマガ、すろぱちくえすと、後年整理DBで一致。

### netIncrease
- ヒーローズロード: 約5枚/G
- HRは規定G数・規定枚数なし。MBが約1/1.7で成立する特殊な高純増区間。

### basicPayout
- HR中MB: 最大23枚
- 不二子ZONE: 通常時最大104枚 / HR中最大119枚
- 一味ZONE: 最大47枚
- HR自体は規定獲得枚数なし。

### ceiling
- 通常時のLIMITカウンタが252pt到達でHR突入。
- 払い出し1枚につき1pt加算。CZ「ルパン ザ チャンス」当選等でリセット。
- 平均到達G数: 設定1 約163.4G / 設定2 約162.0G / 設定5 約158.3G / 設定6 約153.9G。

## modeSpecificMinimumData
- 通常時には低確・高確や通常モードといった状態/モード概念がないとする当時解析あり。
- 主なHR突入経路はCZ成功、LIMITカウンタ252pt、不二子ZONE。
- CZは9G継続。異色CZ成功期待度約10%台、同色CZ約50%だが完全再現用詳細抽選は収集対象外。

## resetBehavior

### settingChangeBehavior
- 設定変更してもLIMITカウンタは前日値を引き継ぐとする複数解析資料あり。
- 通常時閉店→設定変更: 朝一通常時。
- CZ中またはHR中に設定変更: 朝一HRスタートとする本機固有解析あり。
- 液晶ステージは不二子ストーリーを除くいずれかのストーリーへランダム。

### carryOverBehavior
- 据え置き時のLIMITカウンタは引き継ぎ。
- 通常時閉店→通常時、CZ中閉店→CZ継続、HR中閉店→HR継続とする当時解析あり。

### powerCycleBehavior
- 純電源OFF→ON時もLIMITカウンタ引き継ぎとする複数解析資料あり。
- CZ中はCZ、HR中はHRを引き継ぐ資料がある。
- 液晶ステージはランダム。
- 一撃の2018-08-30時点資料ではLIMITカウンタ/状態を「現在調査中」としていたため、当時情報更新時期の差として注記し、後続複数資料の一致をcanonicalへ採用。

### gameCounterReset
- 一般的なゲーム数天井ではなくLIMITポイント方式。
- LIMITカウンタ: 設定変更でも据え置きでも純電源OFF→ONでも`CARRY_OVER`。
- 朝一はカウンタ表示が一時的に隠れ、1枚役・チェリー・ベル等でポイント獲得すると再表示される。

### ceilingAfterReset
- リセット短縮なし。
- 252pt天井そのものを引き継ぐため、前日ポイントが残っていれば宵越し狙いが成立。

### modeAfterReset
- 通常時に低確/高確やゲーム数解除モードの概念なし。
- 朝一専用の出玉モード振り分け: `NOT_APPLICABLE_TO_RECORDED_GAMEPLAY`。

### stateAfterReset
- 通常時の低確/高確状態: `NOT_APPLICABLE`。
- CZ/HR滞在中の設定変更はHRスタートへ変換されるという特殊契約を確認。
- 据え置き/純電断ではCZ/HRを引き継ぐ。

### advantageousSectionReset
- 当時解析は本機について「低確・高確・有利区間などの概念はない」と説明。
- 本DBで記録対象となる有利区間リセット契約は`NOT_APPLICABLE_TO_RECORDED_GAMEPLAY`。5.9号機一般論から補完しない。

### resetBenefits
- LIMITカウンタを設定変更でも引き継ぐため、前日高ポイント台は宵越し天井狙いが可能。
- CZ/HR中に設定変更された場合は朝一HRスタートとなる特殊恩恵あり。
- ただしホール側が閉店後に数G消化する等の対策を容易に行えるため、実戦上は朝一HR狙いが成立しにくいと当時解析が指摘。

### resetPenalties
- 設定変更によるLIMITポイント消去は確認されず、出玉面のリセット専用ペナルティは`NONE_CONFIRMED`。
- 朝一カウンタ値は小役入賞まで表示されないため、即時視認できない。

### resetDetection
- LIMITカウンタ自体が設定変更でも据え置きでも引き継がれるため、カウンタ値だけで設定変更/据え置き判別はできない。
- 朝一CZ/HR状態の違いは理論上判別材料になるが、ホール対策が容易で確定的な変更判別には使わない。
- 本機固有のガックン条件・発生率は、表記・型式・メーカー・「設定変更/リセット/朝一/ガックン」等で再探索しても直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NONE; LIMIT 252pt carried over`
- limitCounterCarryOver: `SETTING_CHANGE=YES / CARRY_OVER=YES / POWER_CYCLE=YES`
- morningHRFromResetIfClosedInCZorHR: `YES_BY_ANALYSIS`
- setting1LimitAverageGames: `163.4G`
- setting2LimitAverageGames: `162.0G`
- setting5LimitAverageGames: `158.3G`
- setting6LimitAverageGames: `153.9G`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- LIMIT天井: 252pt。
- 平均到達G数: 163.4 / 162.0 / 158.3 / 153.9G（設定1/2/5/6）。
- 設定変更専用のモード振り分けや初当たり優遇率は非該当/未確認。

## conflicts
- `SOURCE_TIMING_CONFLICT_RESET_TABLE_EARLY_UNDER_RESEARCH_VS_LATER_ANALYSIS_FIXED`
  - 一撃（2018-08-30最終更新）は設定変更/電源OFF→ON時のLIMITカウンタ・状態を「現在調査中」と掲載。
  - すろぱちくえすと、ちょんぼりすた、期待値見える化等の後続解析はLIMITカウンタ引き継ぎ、CZ/HR中の設定変更→HR開始を具体的に掲載。
  - 数値を平均せず、情報公開時点差として後続の一致情報をcanonicalに採用し、早期資料の未確定表記も記録する。

## missingFields
- 本機固有ガックンの発生条件・発生率。
- 設定変更/純電断時の低レベル成立フラグ等、ホール経営シミュレーションに不要な内部契約は未取得。

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ ルパン三世 世界解剖
   - https://hazuse.com/machine/pachislot/7S1878/
   - 型式`ルパン三世世界解剖／K1`、検定番号`7S1878`、導入2018-07-30、基本ゲーム性を確認。
   - confidence: `ANALYSIS_HIGH`
2. ちょんぼりすた — ルパン三世 世界解剖
   - https://chonborista.com/slot/orinpia-slot/59985/
   - 導入日、設定1/2/5/6、HR初当たり、機械割、LIMIT天井、朝一リセット挙動を確認。
   - confidence: `ANALYSIS_HIGH`
3. すろぱちくえすと — 天井・狙い目・リセット
   - https://www.slopachi-quest.com/article/rupin-sekaikaibou-tennjou/
   - LIMIT252pt、平均到達G数、設定変更/据え置きのLIMIT引継ぎ、CZ/HR中の設定変更→HR、通常時は低確/高確/有利区間概念なしを確認。
   - confidence: `ANALYSIS_HIGH_PERIOD_SOURCE`
4. 期待値見える化 — 朝一リセット解析
   - https://slotjin.com/tenjou/rupinsekaikaibou/
   - 設定変更/電源OFF→ONともLIMIT引継ぎ、CZ/HR中リセット→HR、ホール対策容易の補足を照合。
   - confidence: `ANALYSIS_HIGH_CROSSCHECK`
5. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/140/tsuujo01.php
   - 40.9/41.3/42.4/43.9G/50枚を確認。
   - confidence: `ANALYSIS_HIGH_PERIOD_DB`
6. パチ7 — ヒーローズロード / ZONE
   - https://pachiseven.jp/machines/5512/cutout/13
   - HR規定G数なし、転落条件、LIMIT252ptを確認。
   - https://pachiseven.jp/machines/5512/cutout/11
   - 不二子ZONE最大104/119枚。
   - https://pachiseven.jp/machines/5512/cutout/12
   - 一味ZONE最大47枚。
   - confidence: `ANALYSIS_HIGH`
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_lupin_sekai/3/
   - 2018-08-30時点で設定変更/電源OFF→ON時LIMIT/状態が調査中だったこと、液晶ステージランダムを確認。
   - confidence: `ANALYSIS_HIGH_PERIOD_SOURCE`
8. パチビー — 機種情報
   - https://www.pachibee.jp/machines/lecture/218070003
   - 2018-07-30導入、5.9号機ノーマル特殊タイプ、LIMITカウンタ仕様を照合。
   - confidence: `INDUSTRY_DATABASE`
9. P-WORLD — ルパン三世 世界解剖
   - https://www.p-world.co.jp/machine/database/8695
   - HRの規定G数/枚数なし、LIMIT/CZ/ZONEを照合。
   - confidence: `INDUSTRY_DATABASE`
10. アタリ7 — 2018-07-27記事
   - https://www.atari7.com/column/20181532658421.php
   - 導入予定日2018-07-30、純増約5枚、LIMIT天井を当時記事で補助確認。
   - confidence: `INDUSTRY_PERIOD_ARTICLE`
