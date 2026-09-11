# パチスロ北斗の拳 天昇

recordNo: 1315
machineName: パチスロ北斗の拳 天昇
machineNameVariants: 北斗の拳 天昇 / 北斗天昇
manufacturer: タイヨーエレック（製造元） / サミー（発売・ブランド）
formalModel: Sパチスロ北斗の拳AB XR
certificationNumber: 9S0954
releaseDate: 2019-11-05
generation: 6号機
systemType: AT / CZ→疑似ボーナス→AT / 高純増セット継続型

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 100.1% |
| 4 | 105.4% |
| 5 | 110.1% |
| 6 | 114.0% |

HAZUSE、必勝本、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 激闘BONUS

| 設定 | 初当たり |
|---|---:|
| 1 | 1/398.8 |
| 2 | 1/339.2 |
| 3 | 1/373.1 |
| 4 | 1/333.5 |
| 5 | 1/352.7 |
| 6 | 1/324.4 |

- 偶奇で単調増減しない値だが、当時資料・複数解析で一致するため補正しない。
- 真・天昇RUSH（AT）初当たりは設定1 **1/1103.3** が公開確認可能。
- 設定2〜6のAT初当たりは当時主要解析が「調査中」のため、推定補完せず `PUBLIC_SETTING_SPECIFIC_AT_RATE_NOT_FOUND_AFTER_RESEARCH`。

信頼度: INDUSTRY_CORROBORATED / ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical: **約50G/50枚**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 真・天昇RUSH: **約6.3枚/G**。
- 減少区間なしの高純増AT。

信頼度: OFFICIAL/INDUSTRY + ANALYSIS_HIGH

## basicPayout

- 真・天昇RUSH: セット継続型。ROUNDパートは初回8G+α、2セット目以降7G+α、引き戻しパート7G。
- 継続率: **約85%**。
- AT平均獲得枚数: **設定1〜5 約1,000枚 / 設定6 約800枚**。
- 1セットの固定獲得枚数ではなく、継続構造と平均獲得を物差し値として保持する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は世紀末ポイント1000ptから「世紀末ZONE」、規定ゲーム数から「断末魔ZONE」を経由し、激闘BONUSを目指す。
- 激闘BONUS中に強敵3人撃破で真・天昇RUSHへ突入。
- 通常モード: 通常A / 通常B / 通常C / チャンス。
- モード別天井:
  - 通常A: **700G**（最深部は前兆なしで激闘BONUS）
  - 通常B: **600G+前兆**
  - 通常C: **400G+前兆**
  - チャンス: **200G+前兆**
- 激闘BONUSでAT非当選かつ有利区間継続時は、前回当選G数に応じて次回天井が600G / 400G / 200Gへ短縮する。
- 有利区間はAT終了後または規定の激闘BONUSスルー区切りでリセットされる構造を持つ。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_MORNING_RATE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- **天井ゲーム数RESET**。
- **内部モード再抽選**。
- **昇舞魂RESET**。
- **世紀末ポイントRESET**。
- **非有利区間へ移行し、有利区間ランプ消灯**。
- 朝一は荒野ステージから開始し、リセット後100Gは荒野ステージ滞在とする当時解析あり。
- 本機には設定キーを使わず同一設定を打ち直せる「リセットスイッチ」が搭載されたとの攻略資料があり、店側が同一設定のまま朝一状態を作れる点はホール経営シミュレーション上重要。メーカー推奨運用との記述は二次解析由来のため、メーカー一次契約とは分離して保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **天井ゲーム数CARRY_OVER**。
- 液晶ゲーム数、内部モード、昇舞魂、世紀末ポイント、有利区間状態を引き継ぐとする複数解析が一致。
- 朝一液晶に前日分ゲーム数が残っていれば据え置きの強い/実質確定級判別材料となる。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ONのみでは、**天井ゲーム数 / 内部モード / 昇舞魂 / 世紀末ポイント / 有利区間状態を引継ぎ**。
- 有利区間ランプも前日状態を引き継ぐ。
- 電源OFF→ON時の開始ステージは当時主要解析で「調査中」が残るため、開始ステージだけは `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / PARTIAL_STAGE_ONLY

### gameCounterReset

- 設定変更（リセット）: **RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER**。
- 液晶ゲーム数表示も据え置き時に引き継ぐ。

### ceilingAfterReset

- 設定変更後の最深部天井は通常Aなら **700G**。
- 設定変更専用の固定「短縮天井」は確認できない。
- 600G / 400G / 200Gへの短縮は、設定変更恩恵ではなく **激闘BONUS非AT当選後の有利区間継続時**に発生する別契約。

### modeAfterReset

- 設定変更時: **モード再抽選**。
- 据え置き / 純電断: **モード引継ぎ**。
- リセット時の通常A/B/C/チャンス各モード振り分けの公開確定数値は、表記揺れ・複数解析・後年資料を再探索しても固定できず `PUBLIC_RESET_MODE_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 昇舞魂・世紀末ポイントは設定変更時RESET、据え置き/純電断時CARRY_OVER。
- 設定変更後は非有利区間から開始。
- 実機完全再現用の全内部状態振り分けは対象外。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間開始**。
- 据え置き・純電断: **CARRY_OVER**。
- 朝一有利区間ランプ消灯は設定変更濃厚、点灯は据え置き濃厚という判別材料。
- 通常遊技中は非有利区間から移行後すぐ再点灯するため、確認タイミングには注意が必要。

### resetBenefits

- リセット後はゲーム数・モード・昇舞魂・世紀末ポイントが初期化される。
- 有利区間リセット後の200G以内当選率について、低設定実戦集計 **約5%** の公開値あり。ただしこれは解析値/メーカー公表値ではなく実戦統計なので `EMPIRICAL_MORNING_RATE` として分離。
- 有利区間継続時に発生する天井短縮は強い恩恵だが、これは設定変更恩恵ではないため混同しない。

### resetPenalties

- リセットにより前日のハマりG、昇舞魂、世紀末ポイント、有利区間継続由来の短縮天井状態を失う。
- 有利区間リセット後200G以内の当選率が低いという実戦値があり、朝一の短期的な不利要素として参考になるが、確定解析値ではない。

### resetDetection

- **液晶ゲーム数**: 据え置きなら前日ゲーム数を引継ぐため、前日最終G数と照合して強い判別が可能。
- **有利区間ランプ**: 朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。
- 荒野ステージは設定変更後の開始挙動として公開されるが、これ単独での確定判別条件とは扱わない。
- 本機固有のリールガックン条件/発生率は、`北斗天昇 / Sパチスロ北斗の拳AB XR / タイヨーエレック / サミー` と `ガックン / 設定変更 / 朝一 / 初期出目` を組み合わせ再探索したが、確定契約を固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 有利区間リセット後200G以内当選率: **約5%（低設定中心の実戦値）**。
- 通常モード天井: **700G / 600G+前兆 / 400G+前兆 / 200G+前兆**。
- 有利区間継続時の次回天井短縮:
  - 前回400G以内当選 → **600G+前兆**
  - 前回401〜600G当選 → **400G+前兆**
  - 前回601G以降当選 → **200G+前兆**
- 設定変更時モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`パチスロ北斗の拳 天昇 / 北斗の拳 天昇 / 北斗天昇 / Sパチスロ北斗の拳AB XR / 9S0954 / タイヨーエレック / サミー` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード振り分け / 状態 / 昇舞魂 / 世紀末ポイント / 有利区間 / 有利区間ランプ / ガックン / リセットスイッチ` を組み合わせ、サミー公式、業界記事、HAZUSE、必勝本、K-Navi、スロパチくえすと、期待値見える化、おスロおパチおいでやす等を横断。主要リセット契約は複数資料で固定できた。設定変更専用モード振り分けと本機固有ガックン率のみ十分な再探索後も公開数値を固定できなかった。

## qualityNotes / conflicts

- サミー公式は「サミー株式会社が発売」とし、業界資料は製造元をタイヨーエレックと明記。HAZUSEのメーカー欄もタイヨーエレック。メーカー/ブランドの定義差として両方保持し、別機種扱いしない。
- 2019-11-05導入はサミーのマイスロ当日告知、K-Navi、HAZUSE、必勝本、複数解析で一致。
- 型式 `Sパチスロ北斗の拳AB XR`、検定番号 `9S0954` はHAZUSEで確認。
- AT初当たりは設定1 1/1103.3のみ確定的に公開され、設定2〜6は主要当時資料が調査中。激闘BONUS初当たりと混同しない。
- 天井700Gは「激闘BONUS」確定であり、AT確定天井ではない。
- 有利区間継続時の200/400/600G天井短縮を設定変更恩恵として誤記しない。
- 一部後年ランキング資料に設定1機械割97.0%表記があるが、当時高信頼複数資料97.9%と競合する低優先資料のため `CONFLICT_LOW_PRIORITY_97_0_VS_HIGH_CONFIDENCE_97_9` と記録し、canonicalは97.9%。

## sources

取得日: 2026-09-11

1. サミー公式 — 「パチスロ北斗の拳 天昇」発売のお知らせ（2019-09-06）
   - https://www.sammy.co.jp/japanese/news/2019/1321.html
   - 発売主体・正式商品名を確認。
   - reliability: OFFICIAL
2. サミー公式 マイスロ過去ニュース
   - https://new.sammy.co.jp/japanese/myslot/news/
   - 2019-11-05を「ホール導入日」と明記。
   - reliability: OFFICIAL
3. グリーンべると — 型式試験適合
   - https://web-greenbelt.jp/00011462/
   - 製造元タイヨーエレックを確認。
   - reliability: INDUSTRY
4. Amusement Japan — 新規則機移行の大本命（2019-09-17）
   - https://amusement-japan.co.jp/article/detail/10001378/
   - 純増約6.3枚/G、AT約85%、激闘BONUS設定1〜6端値を確認。
   - reliability: INDUSTRY / CONTEMPORARY
5. グリーンべると — 『パチスロ北斗の拳 天昇』、ハイスペックATを搭載
   - https://web-greenbelt.jp/00011496/
   - 純増約6.3枚/G、継続率約85%、平均獲得約1000枚（設定6約800枚）を確認。
   - reliability: INDUSTRY / CONTEMPORARY
6. HAZUSE — パチスロ 北斗の拳 天昇
   - https://hazuse.com/machine/pachislot/9S0954/
   - 型式、検定番号、導入日、メーカー、出玉率範囲、純増、基本システムを確認。
   - reliability: ANALYSIS_HIGH / DATABASE
7. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3415/1/75541
   - 設定別激闘BONUS、設定1 AT初当たり、設定別機械割、AT平均獲得を確認。
   - reliability: ANALYSIS_HIGH
8. K-Navi — パチスロ北斗の拳 天昇
   - https://p-kn.com/slot/3322/
   - 導入日、設定別激闘BONUS、ゲームフローを照合。
   - reliability: ANALYSIS_HIGH
9. スロパチくえすと — 北斗天昇 天井解析
   - https://www.slopachi-quest.com/article/hokutotennshou-tennjou/
   - 設定変更/据え置き・純電断比較、液晶G数、有利区間ランプ、天井・天井短縮を確認。
   - reliability: ANALYSIS_HIGH
10. おスロおパチおいでやす — 北斗の拳 天昇 天井/朝一
   - https://oslo-opachi.com/2019/09/11/hokutotensyou_tenjyou/
   - 設定変更/電源OFF→ONの天井・モード・昇舞魂・世紀末pt・有利区間ランプ比較を照合。
   - reliability: ANALYSIS_HIGH
11. 期待値見える化 — 北斗の拳天昇 朝一リセット挙動
   - https://slotjin.com/slot/hokutotenshou-reset/
   - 非有利区間開始、据え置き液晶G引継ぎ、リセット後200G以内約5%の実戦値を確認。
   - reliability: ANALYSIS_HIGH / EMPIRICAL_FOR_5_PERCENT
12. モゲスロ — 2019年新台導入日カレンダー
   - https://moge-site.com/new-slot2019
   - 2019-11-05群に北斗天昇、サラリーマン金太郎MAX、蒼穹のファフナーEXODUSの3機を掲載。
   - reliability: ANALYSIS_DATABASE
13. 2-9伝説 — 2019年11月導入一覧
   - https://29den.com/newslot/
   - 2019-11-05群の上記3機を別系統で照合。
   - reliability: ANALYSIS_DATABASE

## missingFields

- 設定2〜6の真・天昇RUSH初当たり確率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更時の通常A/B/C/チャンス各モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機固有ガックン条件/発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH。

## conflicts

- manufacturerLabel: サミー発売/ブランド vs タイヨーエレック製造元。定義差として併記。
- lowPriorityPayoutSetting1: 97.0%（後年単一ランキング） vs 97.9%（当時高信頼複数資料）。平均せずcanonical 97.9%。

status: COMPLETE_CORE_RESET_V07
