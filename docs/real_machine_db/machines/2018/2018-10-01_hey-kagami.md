# No.1234 HEY！鏡

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: HEY！鏡
- manufacturer: 大都技研
- releaseDateCanonical: 2018-10-01
- generation: 6号機初期
- systemType: AT / 疑似ボーナス+AT / ベルナビ管理
- formalModelName: `Sアメリカン番長HEY！鏡B2`
- certificationNumber: `8S0371`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、すろぱちくえすと、当時業界資料で2018-10-01導入が一致。
- 2018-07-09に広島県公安委員会で6号機として初の検定通過とする当時業界記事も確認。
- canonical: `2018-10-01`。
- confidence: `MULTIPLE_ANALYSIS_AND_PERIOD_INDUSTRY_CROSSCHECKED`。

## identificationEvidence
- HAZUSEが型式名 `Sアメリカン番長HEY！鏡B2`、検定番号 `8S0371`、メーカー大都技研、導入開始日2018-10-01を同一ページで掲載。
- 2018年当時の業界記事でも `Sアメリカン番長 HEY！鏡B2` の検定通過を確認。

## performanceCore
### payoutRateBySetting
- setting1: 97.9%
- setting2: 99.5%
- setting3: 101.1%
- setting4: 104.2%
- setting5: 107.3%
- setting6: 112.0%

### initialHitBySetting
ボーナス+AT初当たり合成:
- setting1: 1/330.5
- setting2: 1/311.4
- setting3: 1/288.3
- setting4: 1/256.6
- setting5: 1/231.7
- setting6: 1/189.7

補助公開値（物差し用途）:
- AT直撃: setting1 1/7281.77 / setting2 1/5461.33 / setting3 1/6553.60 / setting4 1/2340.57 / setting5 1/3640.88 / setting6 1/1092.26
- JET BONUS: setting1 1/346.21 / setting2 1/330.22 / setting3 1/301.56 / setting4 1/288.19 / setting5 1/247.44 / setting6 1/229.57

### baseGamesPer50
- 約49G/50枚。

### netIncrease
- JET BONUS / AT「慶志郎チャンス」: 約5.0枚/G。

### basicPayout
- JET BONUS: 20G継続の疑似ボーナス、純増約5枚/G。
- AT「慶志郎チャンス」: ベルナビ回数管理、基本ナビ回数10 / 20 / 30 / 50 / 100回、純増約5枚/G。
- AT継続の基本性能: KC後にCZ「ドライブゾーン」を経由するループ構造、平均継続率約70%とする解析あり。

### ceiling
- ゲーム数天井: 通常時950G+前兆でJET BONUS当選。深いハマりほど青7振り分け優遇、天井到達時は約67%で青7とする複数解析。
- HEYカウンター天井: 通常599HEY / チャンス699HEY / 天国100HEYで規定HEY到達→特訓。最大699HEY。

## modeSpecificMinimumData
- 6号機AT第一弾。通常・チャンス・天国のHEYモードで規定HEY数を管理。
- 通常モード: 最大599HEY、百の位奇数が主なゾーン。
- チャンスモード: 最大699HEY、百の位偶数が主なゾーン、規定HEY到達時の当選期待度が高い。
- 天国モード: 最大100HEY、規定HEY到達時の初当たり期待度70%以上。
- 通常時からCZ・疑似ボーナス・ATまで有利区間を使用し、初期6号機の1500G / 2400枚リミットがゲーム性に直接影響。

## resetBehavior
### settingChangeBehavior
- 設定変更時はゲーム数天井をリセット。
- 規定HEY数を再抽選、HEYモードを再抽選、HEYカウンターをリセット。
- HEY周期数は1周期目から。
- 有利区間はリセット。
- RT状態は引き継ぐとする当時解析。
- 同行キャラはリセット。
- 一撃は設定変更時の状態を `通常`、液晶ステージを `喫茶店ステージ` と整理。
- canonical: `CEILING_HEY_MODE_HEY_COUNTER_ADVANTAGEOUS_SECTION_RESET_WITH_NORMAL_STATE_START`。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置きのみを純電源OFF→ONから完全に分離して全項目を列挙する本機固有の直接資料は今回固定できず、純電断資料を無条件転記しない。
- ただし朝一判別解析では前日HEYゾーン、同行キャラ、有利区間G数の引継ぎを利用した据え置き推測法が掲載されている。

### powerCycleBehavior
- 純電源OFF→ON時はゲーム数天井を引き継ぐ。
- 規定HEY数 / HEYモード / HEY周期数を内部的に引き継ぐ。
- HEYカウンターは内部的には引継ぎ（外見上はリセット表示）。
- 有利区間 / RT状態 / 同行キャラを引き継ぐ。
- 状態は引き継ぐ。
- 液晶は基本喫茶店ステージだが、対決中など通常時以外は引き継ぐとする解析あり。
- canonical: `INTERNAL_COUNTER_MODE_STATE_AND_ADVANTAGEOUS_SECTION_CARRY_OVER_ON_POWER_CYCLE`。

### gameCounterReset
- 設定変更: `RESET`。
- 純電源OFF→ON: `CARRY_OVER`。
- 前日の最終Gが判明している場合、宵越し950G付近の当選挙動を設定変更/据え置き推測に利用可能。ただし引き戻し特訓等でデータカウンターと内部天井がずれる場合あり。

### ceilingAfterReset
- 設定変更専用のゲーム数天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時も通常のゲーム数天井950G+前兆を基準とする。
- HEY側はモード再抽選により実質的な早当たり可能性が設定ごとに変化する。

### modeAfterReset
- 設定変更時はHEYモードを再抽選。
- 設定変更後/DZ終了後のHEYモード振り分け（通常 / チャンス / 天国）:
  - setting1: 85.9% / 10.2% / 3.9%
  - setting2: 71.9% / 20.3% / 7.8%
  - setting3: 84.8% / 10.2% / 5.1%
  - setting4: 67.2% / 25.0% / 7.8%
  - setting5: 82.4% / 12.5% / 5.1%
  - setting6: 53.9% / 35.9% / 10.2%
- 純電源OFF→ONではHEYモードを引き継ぐ。

### stateAfterReset
- 設定変更時: 状態は通常とする当時解析あり。RT状態は引き継ぐとする別解析の項目を併記し、状態とRT状態を同義化しない。
- 純電源OFF→ON: 状態を引き継ぐ。
- 同行キャラは設定変更でリセット / 純電断で内部的に引き継ぐ。

### advantageousSectionReset
- 設定変更時: `RESET`。
- 純電源OFF→ON: `CARRY_OVER`。
- 当時の解析では有利区間1500G到達または2400枚付近でリミット。CZ失敗 / エンディング終了 / 引き戻し特訓失敗等が通常運用中の有利区間リセット契機として整理されている。
- 据え置き朝一で有利区間G数を引き継いだ結果、早いKC当選でも通常より早くエンディングに到達する挙動が設定据え置き推測材料となる。

### resetBenefits
- 設定変更専用の一律恩恵は、約2000件規模の実戦集計を行った解析で特に確認されず `NO_UNIVERSAL_RESET_BENEFIT_CONFIRMED`。
- ただしモード再抽選には明確な設定差があり、特に設定6はチャンス35.9% + 天国10.2%で早い規定HEY到達が相対的に起こりやすい。

### resetPenalties
- 設定変更専用の明示的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし950G近い据え置き天井G数、有利区間進行、同行キャラ等は設定変更で失われるため、前日状況によって客側から見た期待値が低下し得る。これは一律ペナルティとはせず条件依存として保持。

### resetDetection
- ガックン判別: `不可` とする解析あり。
- 規定HEY数: 当日の想定ゾーンで特訓→設定変更可能性アップ、当日ゾーン外→据え置き可能性アップ。ただしフェイク前兆は見た目HEY基準のため単独判別不可。
- ゲーム数天井: 宵越し天井を超える→設定変更濃厚、宵越しで当選→据え置き濃厚（内部カウントとのずれ注意）。
- 同行キャラ: 見た目消失でも内部同行が残る純電断/据え置き挙動を利用し、朝から毎G2HEY以上などで据え置き可能性が上がる。
- 有利区間G数: 朝一早期KCにもかかわらず1500G/2400枚よりかなり手前でエンディングなら据え置き推測材料。

### numericResetData
- 設定変更後/DZ終了後HEYモード振り分け:
  - S1 通常85.9% / チャンス10.2% / 天国3.9%
  - S2 71.9% / 20.3% / 7.8%
  - S3 84.8% / 10.2% / 5.1%
  - S4 67.2% / 25.0% / 7.8%
  - S5 82.4% / 12.5% / 5.1%
  - S6 53.9% / 35.9% / 10.2%
- ゲーム数天井: 950G+前兆。
- HEY天井: 通常599 / チャンス699 / 天国100HEY。
- 天国の規定HEY到達時初当たり期待度: 70%以上。
- 天井到達時の青7JET BONUS振り分け: 約67%とする複数解析。

## conflicts
- 性能コアに重大な数値CONFLICTは現時点でなし。
- 設定変更後の `状態=通常` と `RT状態=引き継ぐ` は別フィールドを示す資料として共存可能で、現時点ではCONFLICT扱いしない。
- 朝一恩恵について「モード再抽選がある」ことと、実戦集計上「一律の朝一恩恵は確認できない」は定義が異なるためCONFLICTではない。

## missingFields
- 据え置きだけを純電源OFF→ONから完全に独立させた全resetBehavior項目の直接契約。
- リールガックンの詳細機構（解析では判別不可まで確認）。
- 設定変更専用の独立した短縮天井（存在を示す資料なし）。

## sources
取得日: 2026-09-10

1. HAZUSE — https://hazuse.com/machine/pachislot/8S0371/
   - 型式 `Sアメリカン番長HEY！鏡B2`、検定番号 `8S0371`、メーカー大都技研、導入2018-10-01。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. パチンコ・パチスロ 悠遊道 — https://www.pachinko-road.com/psnews/9908/
   - 2018-07-09に広島県公安委員会で6号機として初の検定通過、型式 `Sアメリカン番長 HEY！鏡B2`。
   - reliability: `PERIOD_INDUSTRY`
3. K-Navi — https://p-kn.com/slot/3090/
   - 2018-10-01導入、大都技研、AT。
   - reliability: `ANALYSIS_HIGH_ARCHIVE`
4. ちょんぼりすた — https://chonborista.com/slot/daito-slot/61837/
   - 導入日、設定別初当たり/機械割、49G/50枚、純増5枚/G、天井、有利区間、設定変更/純電断挙動、HEYモード振り分け、朝一判別。
   - reliability: `ANALYSIS_HIGH`
5. 一撃 — https://1geki.jp/slot/s_hey_kagami/3/
   - ゲーム数天井950G、設定変更時の天井/状態/HEYカウンターモード/HEYカウンター/液晶、電源ON/OFF時の各引継ぎ。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
6. 期待値見える化 — https://slotjin.com/slot/heykagami-reset/
   - 設定変更/電源OFF→ON比較、ガックン判別不可、設定変更後のHEYモード振り分け、実戦朝一集計。
   - reliability: `ANALYSIS_SINGLE_WITH_LARGE_SAMPLE`
7. LackLuckLife — https://l-l-life.com/kagami/
   - 設定別初当たり/機械割、AT直撃/JET BONUS確率、天井・HEYモード概要。
   - reliability: `ANALYSIS_SINGLE`
8. パチ＆スロ必勝本 — https://p.hisshobon.jp/machine/3211/1/71267
   - 950G天井、HEY天井、有利区間1500G/2400枚の当時解析。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
9. すろぱちくえすと — https://www.slopachi-quest.com/article/hey-kagami/
   - 2018-10-01導入、6号機AT第一弾。
   - reliability: `ANALYSIS_HIGH`

## researchNotes
- `HEY！鏡 / HEY!鏡 / HEY鏡 / ヘイ鏡 / アメリカン番長 / Sアメリカン番長HEY！鏡B2 / 8S0371 / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / HEY / モード / ガックン / 有利区間 / RT状態 / 同行キャラ` を組み替えて探索。
- 型式・検定番号はHAZUSE、検定通過時の型式は2018年当時業界記事で照合。
- 性能コアは複数解析資料で一致。
- resetBehaviorは設定変更と純電断の比較表が複数系統で一致する項目を優先し、据え置き固有契約は純電断から推測転記しなかった。
- 実機完全再現用の小役別抽選、全周期別当選率、全CZ内部抽選は収集対象外。
