# No.1172 新世紀エヴァンゲリオン～まごころを、君に～2

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 新世紀エヴァンゲリオン～まごころを、君に～2
- manufacturer: ビスティ
- releaseDateCanonical: 2018-02-05
- generation: 5.9号機
- systemType: A+RT / 技術介入 / リアルボーナス
- formalModelName: `パチスロ 新世紀エヴァンゲリオン・まごころを君に2j`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- SANKYOオンライン博物館は導入年月2018.02、ブランドBisty、販売名/型式名を掲載。
- パチビー、K-Navi、パチ＆スロ必勝本、ちょんぼりすたはいずれも2018-02-05導入で一致。

## performanceCore

### payoutRateBySetting
- setting1: 97.5%
- setting2: 98.6%
- setting3: 101.1%
- setting4: 104.1%
- setting5: 106.3%
- setting6: 110.2%
- パチビー、ちょんぼりすた等で一致。

### bonusBySetting
- SBB:
  - setting1: 1/697.2
  - setting2: 1/697.2
  - setting3: 1/682.7
  - setting4: 1/675.6
  - setting5: 1/668.7
  - setting6: 1/668.7
- NBB:
  - setting1: 1/736.4
  - setting2: 1/728.2
  - setting3: 1/728.2
  - setting4: 1/720.2
  - setting5: 1/697.2
  - setting6: 1/555.4
- REG:
  - setting1: 1/452.0
  - setting2: 1/439.8
  - setting3: 1/431.2
  - setting4: 1/422.8
  - setting5: 1/381.0
  - setting6: 1/352.3
- bonusCombined:
  - setting1: 1/199.8
  - setting2: 1/196.8
  - setting3: 1/193.9
  - setting4: 1/191.1
  - setting5: 1/180.0
  - setting6: 1/163.0

### baseGamesPer50
- 約41.3G/50枚（設定1）

### netIncrease
- RT「レイチャンス」はメーカー公式系資料で「メダルをほぼ減らすことなく」消化するRTと説明。
- 比較可能な1Gあたり純増の決定的数値は、検索語・資料系統を変えて再探索後も固定できず`UNVERIFIED_NUMERIC_AFTER_RESEARCH`。推測値は入れない。

### basicPayout
- SUPER BIG BONUS: 最大407枚
- BIG BONUS: 最大203枚
- REG BONUS: 最大96枚
- レイチャレンジ: SBB/BIG後最大20G、REG後最大10G
- レイチャンス: 最大50G

### ceiling
- `NONE`

## modeSpecificMinimumData
- 全ボーナス終了後にRT「レイチャレンジ」へ。SBB/BIG後は最大20G、REG後は最大10G。
- レイチャレンジ中に特殊リプレイ成立で最大50GのRT「レイチャンス」へ移行。
- 通常時の演出モードは複数存在するが、物差しに不要な演出内部詳細は収集対象外。

## resetBehavior

### settingChangeBehavior
- パチ＆スロ必勝本の本機専用「天井&設定変更」比較表で、設定変更後のステージは`使徒、襲来ステージ`へ移行。
- 同資料ではRT状態は`現在調査中`のまま。後年資料・型式名・メーカー名・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/RT状態/ガックン/有利区間」を組み替えて再探索したが、設定変更時RT内部状態の決定的な本機固有契約は固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載。

### carryOverBehavior
- 設定据え置きを純電源OFF→ONと独立条件で直接明記した本機固有資料は、再探索後も`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- RT内部状態を一般的なA+RT機の挙動から補完しない。

### powerCycleBehavior
- パチ＆スロ必勝本の本機専用比較表で、純電源OFF→ON後も`使徒、襲来ステージ`へ移行。
- RT状態は同資料で`現在調査中`。後年資料でも決定的更新を固定できず`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- 天井用ゲーム数カウンタは存在しない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用短縮天井: `NOT_APPLICABLE`

### modeAfterReset
- ゲーム数解除モード/天国モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 通常時の演出モードはプレイヤー選択要素であり、朝一内部モードとして扱わない。
- 朝一専用モード/振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- RT内部状態_settingChange: `UNVERIFIED_AFTER_RESEARCH`
- RT内部状態_powerCycle: `UNVERIFIED_AFTER_RESEARCH`
- 通常時内部高低状態の朝一再抽選契約: `NONE_CONFIRMED_AFTER_RESEARCH`

### advantageousSectionReset
- 5.9号機として扱われる機種だが、本機固有の設定変更時有利区間契約を直接明記した資料は再探索後も固定できず`UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`。
- 一般論から補完しない。

### resetBenefits
- 天井非搭載のため天井短縮恩恵なし。
- 設定変更専用のCZ/初当たり優遇、朝一専用モード、主要数値恩恵は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の主要な数値的不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更でも純電源OFF→ONでも開始ステージは`使徒、襲来ステージ`のため、開始ステージ単独では両者を区別できない。
- 本機固有のガックン発生条件/確率、初期出目、ランプ等の確定的変更判別は検索語・資料系統変更後も`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一/設定変更専用の比較可能な初当たり率、モード振り分け、短縮天井、恩恵発生率は再探索後も`NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/純電源OFF→ONとも開始ステージは`使徒、襲来ステージ`。

## conflicts
- 現時点で性能コアに採用値を覆す明確な高信頼CONFLICTなし。
- 後年の低信頼まとめに機械割設定6=111.0%等の表記があるが、パチビー等の当時資料97.5/98.6/101.1/104.1/106.3/110.2%をcanonicalとし、低信頼単独値は採用しない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- numericRtNetIncrease: `UNVERIFIED_AFTER_RESEARCH`
- RT内部状態の設定変更/純電断別契約: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き独立契約: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`
- 本機固有の有利区間リセット契約: `UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`
- ガックン等の確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. SANKYOオンライン博物館 — 機種コレクション
   - https://www.sankyo-fever.jp/collection/887/
   - 2018.02、Bisty、型式名、ボーナス確率、RT概要。
   - confidence: `OFFICIAL`

2. パチビー — 機種情報
   - https://www.pachibee.jp/machines/index/218010000
   - 2018-02-05、機械割、ボーナス確率、最大407/203/96枚、RT概要。
   - confidence: `INDUSTRY`

3. パチ＆スロ必勝本 — リリース情報
   - https://p.hisshobon.jp/machine/3106/1/67827
   - 2018-02-05、製造元ビスティ、ボーナス確率・獲得枚数、RT概要。
   - confidence: `ANALYSIS_HIGH`

4. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/3106/1/68306
   - 天井なし。設定変更/電源OFF ONとも使徒、襲来ステージ。RT状態は当時「現在調査中」。
   - confidence: `ANALYSIS_HIGH`

5. ちょんぼりすた — 解析まとめ
   - https://chonborista.com/slot/bisty-slot/52229/
   - 2018-02-05、A+RT、41.3G/50枚、天井なし、最大407/203/96枚、主要スペック照合。
   - confidence: `ANALYSIS_HIGH`

6. K-Navi — 機種情報
   - https://p-kn.com/slot/2949/
   - 2018-02-05導入のクロスチェック。
   - confidence: `ANALYSIS_HIGH`

7. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/8574
   - A+RT/技術介入/リアルボーナス、RTゲームフロー・獲得枚数のクロスチェック。
   - confidence: `INDUSTRY`

## qaNotes
- 「エヴァまご」「まごころ2」「まご君2」「パチスロ新世紀エヴァンゲリオン・まごころを君に2j」、ビスティ/フィールズ/SANKYOを組み替え、設定変更・リセット・朝一・据え置き・電源OFF ON・RT状態・ガックン・有利区間・型式/検定を再探索した。
- 必勝本の本機専用比較表がRT状態を「現在調査中」としているため、一般的なRT機の仕様からRESET/CARRYOVERを推測しない。
