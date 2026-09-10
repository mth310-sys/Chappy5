# No.1189 パチスロ北斗の拳 修羅の国篇 羅刹ver.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ北斗の拳 修羅の国篇 羅刹ver.
- manufacturer: サミー / Sammy
- releaseDateCanonical: 2018-05-07
- generation: 5.9号機 / 5号機
- systemType: A+RT / GRT
- formalModelName: `パチスロ北斗の拳AA／ZS`
- certificationNumber: `7S0983`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始日2018-05-07、型式`パチスロ北斗の拳AA／ZS`、検定番号`7S0983`を掲載。
- 一撃は導入予定日2018-05-07。
- グリーンべるとは2018-03-12の発表記事で5月上旬納品予定、PiDEA Xは納品5/6〜と報道しており、5/7ホール導入と整合。
- Sammy公式には2018-04-28時点で本機導入記念キャンペーンページが現存。
- releaseDateCanonical: 2018-05-07。

## performanceCore

### payoutRateBySetting
通常市場掲載PAY:
- setting1: 97.2%
- setting2: 98.1%
- setting3: 100.5%
- setting4: 103.4%
- setting5: 108.2%
- setting6: 111.8%

完全攻略時PAY:
- setting1: 99.7%
- setting2: 100.6%
- setting3: 103.0%
- setting4: 106.0%
- setting5: 111.0%
- setting6: 115.1%

### initialHitBySetting
主要初当たりとしてボーナス合算:
- setting1: 1/229.9
- setting2: 1/226.8（一撃） / 1/226.7（ちょんぼりすた、丸め差）
- setting3: 1/212.1（一撃） / 1/212.0（ちょんぼりすた、丸め差）
- setting4: 1/198.6（一撃） / 1/198.5（ちょんぼりすた、丸め差）
- setting5: 1/177.6
- setting6: 1/164.7（一撃） / 1/164.6（ちょんぼりすた、丸め差）

ノーマルBIG:
- setting1: 1/689.9
- setting2: 1/675.6
- setting3: 1/612.5
- setting4: 1/560.1
- setting5: 1/481.9
- setting6: 1/436.9

REG:
- setting1: 1/689.9
- setting2: 1/675.6
- setting3: 1/612.5
- setting4: 1/560.1
- setting5: 1/481.9
- setting6: 1/436.9

補足:
- HYPER BIGは赤7/青7の複数フラグがあり、個別確率表が存在する。物差し用途ではボーナス合算・N-BIG・REGを主要比較値として保存し、全フラグ詳細は収集対象外。

### baseGamesPer50
- canonical: 約34.3G/50枚。
- ちょんぼりすた掲載値。今回確認した主要別系統資料では明示的な競合値なし。

### netIncrease
- RT「転生の刻」100G。
- RTは出玉を大きく増やすARTではなく、ボーナスループを補助するGRT構造。
- 本機RTの比較可能な純増/G具体値: `UNVERIFIED_AFTER_RESEARCH`。

### basicPayout
- HYPER BIG: 300枚 + RT100G。
- BIG: 最大239枚 + RT100G。
- REG: 最大64枚 + RT100G。
- 全ボーナス終了後に100G RT「転生の刻」へ突入。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- GRTタイプ第2弾。
- 全ボーナス後に100G RT「転生の刻」へ突入。
- RT中はケンシロウ / カイオウ / シャチ / リンの4演出モードから選択可能。
- 技術介入機として通常掲載PAYと完全攻略時PAYを分離保存。

## resetBehavior

### settingChangeBehavior
- 本機専用の一撃「天井/設定変更」ページでは、設定変更時RT状態・液晶ステージはいずれも当時`現在調査中`。
- 機種名/略称/型式名/メーカー名と「設定変更/リセット/朝一/据え置き/電源OFF ON/RT状態/ガックン」を組み替え、当時解析・後年まとめ・業界資料まで再探索したが、本機固有の確定契約へ昇格できる追加資料は確認できず。
- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電源OFF→ONと分離し、RT状態・表示状態を直接規定する本機固有資料: `UNVERIFIED_AFTER_RESEARCH`。
- A+RT一般論や同社GRT第1弾機の挙動から推定転記しない。

### powerCycleBehavior
- 本機専用の一撃資料では電源OFF→ON時のRT状態・液晶ステージとも当時`現在調査中`。
- 再探索後も直接契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井ゲーム数: `NOT_APPLICABLE_NO_CEILING`。
- RT残G/内部RT状態のsettingChange / carryOver / powerCycle差: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 朝一専用当選モード、設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 液晶ステージの設定変更時/純電断時初期化規則: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- RT状態の設定変更時/据え置き時/純電断時処理: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- A+RT/GRT機。本DBの朝一客行動へ直接効くAT/ART型有利区間の本機固有リセット契約は今回確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から推定補完しない。

### resetBenefits
- 天井非搭載のため短縮天井恩恵なし。
- 設定変更専用の朝一当選率上昇、RT優遇、専用高確等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の公開された主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン発生条件・発生率・設定変更確定契約: `UNVERIFIED_AFTER_RESEARCH`。
- 液晶ステージ/RT状態についても変更時と純電断時の直接比較値が固定できないため、確定判別材料として扱わない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificMorningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificRTAdvantage: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時だけ適用される短縮天井・朝一特定G以内当選率・専用モード振り分け・RT優遇率などの比較可能な公開数値は、検索語と資料系統を変更して再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一撃の当時ページ自体が設定変更時/電源ON-OFF時のRT状態・液晶ステージを「現在調査中」としており、推測で補完しない。

## conflicts
- ボーナス合算の設定2/3/4/6に一撃とちょんぼりすた間で0.1程度の表記差があるが、分母の小数丸め差の範囲。重大な性能CONFLICTとしては扱わず双方の値を明記。
- 主要性能値・導入日・型式/検定番号には今回、採用判断を左右するCONFLICTなし。

## missingFields
- RT純増/G具体値: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時RT状態/液晶ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き独立条件のRT/表示状態: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時RT状態/液晶ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有有利区間リセット契約: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン確率/確定判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. Sammy公式 — パチスロ 北斗の拳 修羅の国篇 羅刹ver.導入記念Twitter RTキャンペーン
   - https://www.sammy.co.jp/japanese/product/pachislot/2018/hokuto_rasetsu/campaign/application.html
   - 2018-04-28開始の公式キャンペーン。本機の正式商品名・Sammy公式性を確認。
   - confidence: `OFFICIAL`
2. グリーンべると / P-WORLD業界ニュース — 好評のGRTタイプ第二弾は『パチスロ北斗の拳』（2018-03-12）
   - https://news.p-world.co.jp/articles/9992/greenbelt
   - A+RT/GRT第2弾、HBB300枚/BIG最大239枚/REG最大64枚、全ボーナス後RT100G、5月上旬納品予定。
   - confidence: `INDUSTRY`
3. PiDEA X — 三木流、北斗の拳 修羅の国篇 羅刹Verの評価は？（2018-03-23）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3%20%E4%BF%AE%E7%BE%85%E3%81%AE%E5%9B%BD%E7%AF%87%20%E7%BE%85%E5%88%B9Ver%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納品5/6〜、各ボーナス獲得性能、ボーナス合算、機械割を掲載。
   - confidence: `INDUSTRY`
4. HAZUSE — パチスロ北斗の拳 修羅の国篇 羅刹ver.
   - https://hazuse.com/machine/pachislot/7S0983/genre/201/
   - 導入2018-05-07、型式`パチスロ北斗の拳AA／ZS`、検定番号`7S0983`。
   - confidence: `ANALYSIS_HIGH`
5. 一撃 — パチスロ北斗の拳 修羅の国篇 羅刹ver.
   - https://1geki.jp/slot/s_hokuto_sr/
   - 2018-05-07、設定別ボーナス合算、通常PAY/完全攻略PAY、獲得枚数、RT100G。
   - confidence: `ANALYSIS_HIGH`
6. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_hokuto_sr/3/
   - 天井非搭載。設定変更時・電源OFF→ON時のRT状態と液晶ステージは当時「現在調査中」。
   - confidence: `ANALYSIS_HIGH`
7. ちょんぼりすた — 北斗の拳 羅刹ver スロット新台
   - https://chonborista.com/slot/sammy-slot/55750/
   - 2018-05-07、5.9号機A+RT、34.3G/50枚、天井非搭載、設定別N-BIG/REG/合算/通常PAY/完全攻略PAY。
   - confidence: `ANALYSIS_HIGH`
