# No.1209 パチスロ 美ラメキ！

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 美ラメキ！
- manufacturer: 藤商事
- releaseDateCanonical: 2018-07-02
- generation: 5.9号機 / 5号機
- systemType: ART / 疑似ボーナス連チャンタイプ
- formalModelName: `ピカれ！アイランドFSA`
- certificationNumber: `7S1690`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ちょんぼりすた、HAZUSE、パチセブンで2018-07-02導入が一致。
- PiDEA Xの2018-05-22発表会記事は7月導入予定、同媒体の機械選定記事は納品7/1～とするため、ホール導入canonicalは複数一致の2018-07-02。
- HAZUSEで型式`ピカれ！アイランドFSA`、検定番号`7S1690`を確認。
- confidence: `ANALYSIS_HIGH / INDUSTRY_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 97.2%
- setting2: 99.0%
- setting3: 100.8%
- setting4: 103.2%
- setting5: 106.2%
- setting6: 112.5%

### initialHitBySetting
ART（疑似ボーナス）初当たり:
- setting1: 1/372.7
- setting2: 1/359.4
- setting3: 1/343.6
- setting4: 1/324.9
- setting5: 1/303.4
- setting6: 1/273.3

常夏CHANCE初当たり:
- setting1: 1/1034.8
- setting2: 1/973.2
- setting3: 1/903.3
- setting4: 1/823.2
- setting5: 1/740.2
- setting6: 1/621.8

### baseGamesPer50
- 47.3～50.4G/50枚。
- パチマガスロマガとちょんぼりすたで一致。PiDEA X機械選定記事の概数47G/50枚とも整合。

### netIncrease
- 疑似ボーナスART: 約2.0枚/G。

### basicPayout
- BIG: 60G、平均約130枚。
- ハイビスカスボーナス: 60G、平均約130枚 + 1G連BIG濃厚。
- REG: ベルナビ8回、平均約60枚。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- 初当たり後は32Gの引き戻しゾーンへ移行し、引き戻し成功時は32G以内の連チャンが期待される`常夏CHANCE`へ移行。
- PiDEA Xは常夏CHANCE突入率を約36～44%と紹介。
- 通常時には通常 / 高確 / 超高確の内部状態が存在する。
- 有利区間完走が濃厚となる契機・状態の存在は解析資料で確認するが、全移行テーブルや細かな内部抽選は物差し用途外のため収集しない。

## resetBehavior

### settingChangeBehavior
- 当時解析の朝一比較表では、設定変更時の`内部状態 / ステージ`はいずれも「調査中」。
- 機種名表記揺れ、正式型式、藤商事、設定変更/リセット/朝一/据え置き/電源OFF→ON/有利区間/ガックンを組み替えて再探索したが、設定変更直後の内部状態・ステージを確定できる本機固有契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一方、設定変更後1000G以内に当選したBIG終了時のクアッドコアランプには専用振り分けが公開されているため、変更後であることが既知の場合の設定推測材料としてnumericResetDataへ保持する。

### carryOverBehavior
- 据え置きを独立条件として内部状態・連チャン状態・有利区間・初期ステージを直接明記する本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 当時解析の比較表では純電源OFF→ON時の`内部状態 / ステージ`も「調査中」。
- 据え置き一般論から自動補完せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井は非搭載のため、天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- 32G引き戻し状態などの設定変更/据え置き/純電断別継続契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更専用のモード振り分け、朝一専用モード移行率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時に複数内部状態、ボーナス後に常夏CHANCE等が存在すること自体は確認できるが、設定変更時の再抽選/引継ぎは未固定。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerOFFToON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

### advantageousSectionReset
- 5.9号機ARTとして有利区間を利用するゲーム性は確認できるが、設定変更/据え置き/純電断別の有利区間処理を本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 天井短縮・朝一ART直行・専用高確移行率等の設定変更固有恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後1000G以内のBIG後ランプ振り分け変化は出玉恩恵ではなく、設定推測情報としてnumericResetDataへ記録。

### resetPenalties
- 設定変更固有の公開された不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ガックン、初期出目、液晶/ランプ、有利区間ランプ等による設定変更/据え置きの本機固有確定判別条件・公開発生率は `UNVERIFIED_AFTER_RESEARCH`。
- BIG後ランプの「設定変更後1000G以内」専用振り分けは、設定変更済みであることを前提にした設定推測値であり、単独の変更判別契約としては扱わない。

### numericResetData
設定変更後1000G以内にBIG当選した場合のクアッドコアランプ振り分け（上2 / 下2 / 全点灯 / 全高速点灯）:
- setting1: 80.0% / 20.0% / - / -
- setting2: 20.0% / 80.0% / - / -
- setting3: 80.0% / 20.0% / - / -
- setting4: 15.0% / 60.0% / 25.0% / -
- setting5: 60.0% / 15.0% / 25.0% / -
- setting6: 37.5% / 37.5% / 20.0% / 5.0%
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更後1000G以内のBIG後ランプ専用振り分けは上記の通り公開値を保持。
- 朝一特定G以内のART当選率、設定変更専用モード振り分け、ガックン率等は再探索後も固定できず。

## conflicts
- performance coreで重大な競合は今回確認せず。
- PiDEA X機械選定記事の初当たり値は概数`1/373 → 1/273`、ベース`47G/50枚`で、解析表の精密値`1/372.7 → 1/273.3`、`47.3～50.4G/50枚`と整合するため丸め差として扱いCONFLICTにはしない。

## missingFields
- 設定変更/据え置き/純電源OFF→ON別の内部状態・ステージ・有利区間契約。
- 本機固有の変更判別契約・ガックン率。
- 設定変更専用の朝一当選率/モード振り分け。

## sources
取得日: 2026-09-10

1. PiDEA X — 多彩なトリガーと32Gのドキドキ感「美ラメキ!」／藤商事
   - https://www.pidea.jp/articles/%E5%A4%9A%E5%BD%A9%E3%81%AA%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A832G%E3%81%AE%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E6%84%9F%E3%80%8C%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%21%E3%80%8D%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
   - 2018-05-22、純増約2.0枚ART、BIG約130枚、REG約60枚、常夏CHANCE突入率約36～44%、7月導入予定。
   - confidence: `INDUSTRY`
2. PiDEA X — 三木流、美ラメキの評価は？
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納品7/1～、設定別初当たり概数、設定別出玉率、ベース47G/50枚、天井なし、ART純増2.0枚/G。
   - confidence: `INDUSTRY`
3. ちょんぼりすた — 美ラメキ! スロット新台
   - https://chonborista.com/slot/fuji-slot/59634/
   - 導入2018-07-02、設定別ART初当たり/常夏CHANCE/機械割、47.3～50.4G/50枚、天井非搭載、設定変更/電源OFF→ON時の内部状態・ステージ調査中、設定変更後1000G以内BIGのランプ振り分け。
   - confidence: `ANALYSIS_HIGH`
4. パチマガスロマガ — パチスロ 美ラメキ!
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/28/a.php
   - 5.9号機ART、純増2.0枚/G、47.3～50.4G/50枚、常夏CHANCE概要。
   - confidence: `ANALYSIS_HIGH`
5. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/28/c.php
   - 50枚あたり47.3～50.4Gを再確認。
   - confidence: `ANALYSIS_HIGH`
6. HAZUSE — パチスロ 美ラメキ！
   - https://hazuse.com/machine/pachislot/7S1690/
   - 導入2018-07-02、藤商事、型式`ピカれ！アイランドFSA`、検定`7S1690`、出玉率97.2～112.5%、純増約2.0枚。
   - confidence: `ANALYSIS_HIGH`
7. パチセブン — パチスロ 美ラメキ！
   - https://pachiseven.jp/machines/5464/cutout/9
   - 導入2018-07-02、ART、天井なし、BIG60G/約130枚、BIG後ランプ設定示唆。
   - confidence: `ANALYSIS_HIGH`

## confidenceSummary
- release/model/certification: `ANALYSIS_HIGH / INDUSTRY_CROSSCHECKED`
- payout/initialHit/base/netIncrease/basicPayout: `ANALYSIS_HIGH / MULTI_SOURCE`
- resetBehavior internal contract: `UNVERIFIED_AFTER_RESEARCH`
- numeric reset-related lamp distribution: `ANALYSIS_HIGH`
