# No.1201 大神～回胴編～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 大神～回胴編～
- manufacturer: エンターライズ
- releaseDateCanonical: 2018-06-18
- generation: 5.9号機 / 5号機
- systemType: A+ART / CZ経由ART
- formalModelName: `大神／ZS`
- certificationNumber: `7S1270`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、ちょんぼりすた、期待値見える化、すろぱちくえすと、当時業界記事PiDEA Xで2018-06-18一致。
- グリーンべるとは2018-04-20の発表記事でエンターライズ製A+ARTとして紹介。
- 2018-06-05～06-17の境界は日刊スポーツ当時導入カレンダー等を確認。6/4の次の掲載パチスロ日付は6/18で、今回の横断検索でも独立未処理型式を固定できなかったため、前群6/4 CLOSEDから6/18へ進行。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 99.0%
- setting3: 100.5%
- setting4: 104.9%
- setting5: 107.4%
- setting6: 113.6%

ちょんぼりすた、期待値見える化、pacnkで一致。

### initialHitBySetting
BIG合算:
- setting1: 1/352.3
- setting2: 1/341.3
- setting3: 1/327.7～1/327.8（資料丸め差）
- setting4: 1/297.9
- setting5: 1/283.7
- setting6: 1/254.0

REG（幸BONUS）合算:
- setting1: 1/364.1
- setting2: 1/352.3
- setting3: 1/337.8
- setting4: 1/306.2
- setting5: 1/283.7
- setting6: 1/254.0

ボーナス合算:
- setting1: 1/179.1
- setting2: 1/173.4
- setting3: 1/166.3
- setting4: 1/151.0
- setting5: 1/141.9
- setting6: 1/127.0

ART初当たり:
- setting1: 1/371.3
- setting2: 1/364.0
- setting3: 1/353.1
- setting4: 1/329.3
- setting5: 1/314.6
- setting6: 1/288.7

HAZUSE、ちょんぼりすた、期待値見える化で主要値一致。

### baseGamesPer50
- 約31G/50枚

### netIncrease
- ART「天道絵巻物」: 約1.0枚/G（ボーナス除く）

### basicPayout
- BIG: 約200枚
- REG / 幸BONUS: 約60枚
- ART: 1セット平均約50G、自力継続型

### ceiling
- 通常ART直撃天井: 非搭載。
- CZ間天井: **CZ「筆神モード」間500Gで筆神モード確定**。
- CZ間G数は液晶メニュー/履歴画面から確認可能。

## modeSpecificMinimumData
- ART突入の中心はCZ「筆神モード」「天道チャレンジ」。
- ボーナス終了後・ART終了後はCZへ移行。
- 内部状態は通常/高確/超高確が公開され、ボーナス成立時のART期待度に影響。
- CZ間500G天井はART確定ではなくCZ確定なので、通常のART天井と定義を分離する。

## resetBehavior

### settingChangeBehavior
- 設定変更でもCZ間天井ゲーム数は**引き継ぎ**。
- ちょんぼりすたでは筆神モード、ボーナス・ARTも引き継ぎと整理。筆神モード中は画面が通常へ戻っても内部的には引き継ぐとされる。
- ボーナス/ART中に閉店して設定変更された場合、内部的にCZからスタートすると複数当時解析が記載。
- 通常/高確/超高確の内部状態について、期待値見える化は「再抽選？」、すろぱちくえすとは「非有利区間」としており、確定した状態振り分けは公開資料から固定できないため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は、すろぱちくえすとの朝一表で天井・内部状態・RT状態を引き継ぐとされる。
- CZ間ゲーム数は前日から継続して狙えるため、宵越しCZ間500G天井が成立する。

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、期待値見える化/ちょんぼりすたの比較表でCZ天井G数を引き継ぐ。
- 期待値見える化では内部状態と有利区間ランプも引き継ぎ。
- ちょんぼりすたでは筆神モード、ボーナス・ARTも引き継ぎとされる。

### gameCounterReset
- CZ間500Gカウンタ: **設定変更でもCARRYOVER / 電源OFF→ONでもCARRYOVER**。
- 据え置き: CARRYOVER。
- 通常ART直撃天井は非搭載。

### ceilingAfterReset
- 設定変更によるCZ間天井短縮/再セットなし。前日のCZ間G数をそのまま引き継ぎ、500G到達で筆神モード。
- resetSpecificShortenedCeiling: `NONE_CONFIRMED`。

### modeAfterReset
- 朝一専用の優遇モード/CZスタート説は当時資料間で検証されたが、実戦値で支持されず確定情報として採用しない。
- 設定変更時の通常/高確/超高確の具体的振り分け: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 筆神モード/RT状態の引継ぎはちょんぼりすたで明示。ただし別資料のRT状態欄には「調査中」も残るため、低レベルRT状態の全契約を1:1再現する値までは採らない。
- 通常/高確/超高確の設定変更後状態は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きおよび純電断では内部状態引継ぎが当時朝一表で確認される。

### advantageousSectionReset
- 設定変更時: 有利区間ランプ**消灯**。
- 電源OFF→ONのみ: 有利区間ランプ**引き継ぎ**。
- すろぱちくえすとは設定変更後の内部状態を「非有利区間」と整理。
- 有利区間ランプはクレジット右下のドット。

### resetBenefits
- CZ間天井G数を設定変更でも引き継ぐため、前日ハマリが残れば朝一から宵越しCZ天井を狙える。
- 前日ART/CZ/ボーナス中閉店から設定変更された場合、内部CZスタートとなるケースが当時解析で報告される。
- 一般的なリセット専用CZ優遇は、実戦値で裏付けられず `NONE_CONFIRMED`。

### resetPenalties
- 設定変更時に有利区間ランプが消灯する。
- CZ間天井G数自体は消えないため、天井リセットによる朝一不利は確認されない。
- その他の設定変更専用不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一有利区間ランプ点灯: 据え置き濃厚（対策時除く）。
- 前日有利区間ランプ点灯閉店 → 朝一非点灯: 設定変更/リセット濃厚（対策時除く）。
- ガックン判別は当時解析で「おそらく不可能」。確定判別契約には昇格せず `UNVERIFIED_AS_CERTAIN_DETECTION`。
- CZ間ゲーム数は設定変更でも引き継ぐため、CZ当選G数だけではリセット判別できない。

### numericResetData
- czIntervalCeilingAfterSettingChange: `500G threshold, PREVIOUS COUNT CARRIED OVER`
- czIntervalCeilingAfterPowerCycle: `500G threshold, PREVIOUS COUNT CARRIED OVER`
- resetSpecificShortenedCeiling: `NONE`
- resetSpecificModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 期待値見える化の当時実戦集計では朝一30G以内ART当選が、新台初日70件中2件、2～3日目110件中0件。
- この実戦値は「リセット後CZ優遇」を支持しない材料としてのみ保存し、メーカー公表の設定変更専用当選率とは扱わない。

## conflicts
- 通常時の「天井非搭載」という表記と「CZ間500G天井」は定義差でありCONFLICTではない。前者はART直撃天井なし、後者はCZ間救済。
- 設定変更後の通常/高確/超高確について「再抽選？」と「非有利区間」の資料表現があり、具体的な状態振り分けを固定できない。平均/推定せず `UNVERIFIED_AFTER_RESEARCH`。
- 後年の5.9号機まとめには本機を2018-05-21・別スペック値で記載するページがあるが、HAZUSE、当時業界記事、複数当時解析が2018-06-18および本レコード性能値で一致するため、当該後年まとめは本機canonical性能へ混入しない。

## missingFields
- 設定変更後の通常/高確/超高確の確定振り分け。
- 設定変更時RT状態の完全な低レベル契約。
- ガックンの本機固有確定発生条件/発生率。

## sources
取得日: 2026-09-10

1. HAZUSE — 大神～回胴編～
   - https://hazuse.com/machine/pachislot/7S1270/
   - 型式`大神／ZS`、検定番号`7S1270`、導入2018-06-18、設定別BIG/REG/ボーナス合算/ART初当たり。
   - confidence: `ANALYSIS_HIGH`
2. グリーンべると — 筆神の力を駆使して妖怪とのバトルを制せ！
   - https://web-greenbelt.jp/00010406/
   - エンターライズ製、A+ART、BIG200枚/REG60枚、ART純増約1.0枚/G、1セット平均50G、ART初当たりレンジ。
   - confidence: `INDUSTRY`
3. PiDEA X — 紅白の専用筐体白野威で人気ゲーム「大神」登場／エンターライズ
   - https://www.pidea.jp/articles/%E7%B4%85%E7%99%BD%E3%81%AE%E5%B0%82%E7%94%A8%E7%AD%90%E4%BD%93%E7%99%BD%E9%87%8E%E5%A8%81%E3%81%A7%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E5%A4%A7%E7%A5%9E%E3%80%8D%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%82%BA
   - 2018-04-23記事、導入2018-06-18予定、A+ART、BIG200枚/REG60枚、純増約1.0枚/G。
   - confidence: `INDUSTRY`
4. ちょんぼりすた — 大神 スロット新台
   - https://chonborista.com/slot/enta-slot/58561/
   - 導入2018-06-18、設定別機械割/ボーナス/ART初当たり、約31G/50枚、CZ間500G、設定変更/電源OFF→ONの引継ぎ挙動。
   - confidence: `ANALYSIS_HIGH`
5. 期待値見える化 — 大神 天井・有利区間・朝一リセット解析
   - https://slotjin.com/tenjou/okami/
   - CZ間500G、設定変更/電断ともCZ天井引継ぎ、設定変更時有利区間ランプ消灯/電断時引継ぎ、朝一30G実戦値。
   - confidence: `ANALYSIS_HIGH`
6. すろぱちくえすと — パチスロ 大神 解析攻略
   - https://www.slopachi-quest.com/article/ookami-kaidouhen/
   - 据え置き/設定変更時の天井・内部状態・RT状態表、有利区間ランプによるリセット判別、朝一CZ狙い否定。
   - confidence: `ANALYSIS_HIGH`
7. パチマガスロマガ — 大神～回胴編～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/17/a.php
   - A+ART、BIG200枚/REG60枚、ART平均50G・純増約1.0枚/G。
   - confidence: `ANALYSIS_HIGH`
8. 日刊スポーツ — パチンコ・パチスロ導入カレンダー（2018-05-25）
   - https://www.nikkansports.com/amusement/pachislot/news/201805250000665.html
   - 6/4群の次として6/18「大神～回胴編～」を掲載。境界監査に使用。
   - confidence: `INDUSTRY`

## confidenceSummary
- identity/formalModel/certification: `ANALYSIS_HIGH`
- releaseDate: `INDUSTRY + ANALYSIS_HIGH`
- performanceCore: `INDUSTRY + ANALYSIS_HIGH`
- resetBehavior CZ counter / power / advantageous lamp: `ANALYSIS_HIGH`
- resetBehavior detailed internal state / RT low-level: `UNVERIFIED`
