# パチスロ戦国無双3

recordNo: 1549
machineName: パチスロ戦国無双3
manufacturer: 山佐ネクスト
formalModel: Sパチスロ戦国無双3ZYTCD
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-02-06
generation: 6.5号機 / メダル機
systemType: AT / 規定刻数・疑似ボーナス経由AT
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 98.2%
- 設定2: 99.2%
- 設定4: 103.9%
- 設定5: 106.4%
- 設定6: 110.0%
- 設定L: 公開通常スペック値なし

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス合算
- 設定1: 1/271.6
- 設定2: 1/216.0
- 設定4: 1/174.5
- 設定5: 1/147.1
- 設定6: 1/127.6

### AT「戦国RUSH」初当たり
- 設定1: 1/582.0
- 設定2: 1/483.2
- 設定4: 1/385.3
- 設定5: 1/310.2
- 設定6: 1/247.8

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約39.4G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「戦国RUSH」: 約1.8枚/G。
- 上位AT中の一部区間: 約4.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- REG: 約36枚。
- BIG: 約120枚。
- AT「戦国RUSH」: 初期平均約50G、純増約1.8枚/G。
- 上位AT「天下無双の傾奇インフィニティバースト」: 約1.8枚/G、一部約4.0枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は液晶表示の「刻」で進行し、ボーナス当選では刻数をリセットしない。
- 通常A: 999刻+α、通常B: 888刻+α、通常C: 555刻+α、引き戻し: 333刻+α、天国: 111刻+α、慶次: 1029刻+α。
- 通常A〜天国の天井到達はAT当選。慶次モードはAT当選時に「天下無双への道」へ突入。
- 111刻は全モードでボーナス/AT期待度50%以上。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_MODE_RESELECT_AND_PUBLIC_MODE_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井/刻数をRESET。
- 内部状態をRESET。
- 通常時モードは再抽選。パチマガスロマガは設定変更時とAT終了後にモード振り分け抽選を行うと明記。
- 開始ステージは甲斐国。

### carryOverBehavior
- 据え置き時は天井/刻数・内部状態をCARRY_OVER。
- 有利区間は継続側として扱われる解析。
- モードの据え置き時直接対比表は十分な再探索後も固定できず、刻数/天井引継ぎからモードまで推測転記せず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時は天井/刻数・内部状態をCARRY_OVER。
- 開始ステージは甲斐国。
- 純電断単独の内部モードと有利区間状態を機種固有に明示した直接資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: 天井/刻数RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 刻数は通常のボーナス当選ではリセットされずAT当選まで継続。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- モード再抽選後の天井は選択モードに依存し、111 / 333 / 555 / 888 / 999 / 1029刻+α。

### modeAfterReset
- 設定変更時: 再抽選。
- AT終了後: 再抽選。
- 設定変更時だけの専用朝一モードは確認できず。
- 設定変更時の通常A/B/C・引き戻し・天国・慶次の具体的振り分け率は、機種名/正式型式/メーカー/朝一/リセット/モード振り分けを組み替えて再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER側として確認。
- 純電源OFF→ON単独: `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 設定変更後はモードを再抽選。
- 全モード共通で111刻のボーナス/AT期待度が50%以上のため朝一111刻が最初の強い確認地点。ただしこれは設定変更専用恩恵ではなく通常モード共通仕様。
- 設定変更専用の天井短縮・専用優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更で前日の天井/刻数進行と内部状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後は非有利区間から開始するため、朝一のデータカウンタと液晶「刻」の進行にズレが生じた場合は変更判別材料となる解析あり。
- 設定変更/純電断とも甲斐国ステージ開始のため、開始ステージ単独では判別不可。
- 有利区間ランプによる判別を記す後年DBはあるが、機種固有の高信頼当時資料で朝一点灯/消灯契約を十分に固定できなかったため `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のリールガックン条件/発生率は表記揺れ・正式型式・メーカーを含め再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更専用モード振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 全モード共通111刻のボーナス/AT期待度: 50%以上（設定変更専用値ではない）。
- モード別天井: 通常A999 / 通常B888 / 通常C555 / 引き戻し333 / 天国111 / 慶次1029刻+α。

### publicMorningNumbers
- 設定変更専用のモード振り分け、特定刻以内AT率、リセット恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一111刻期待度50%以上は通常時全モード共通値として分離保存。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `戦国無双3 / パチスロ戦国無双3 / Sパチスロ戦国無双3ZYTCD / 山佐 / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 刻 / モード / モード振り分け / ガックン / 有利区間 / 有利区間ランプ` を組み替えて検索。
- Amusement Japan、P-WORLD、K-Navi、なな徹、一撃、パチマガスロマガ、パチ7、ちょんぼりすた、旧攻略系を横断。

## conflicts
- 後年の一部DBにはボーナス合算や機械割、純増について主要解析と異なる値（例: 設定1ボーナス1/290.0、機械割98.0〜111.0%、純増約6.5枚/G）がある。主要当時解析・複数サイトで一致する `1/271.6〜1/127.6 / 98.2〜110.0% / 1.8 or 4.0枚/G` をcanonicalとし、後年DB値は `CONFLICT_LATE_DATABASE`。
- 天井をゲーム数換算で「800G+α」とする後年DBがあるが、本機の公式的な管理単位は液晶「刻」。canonicalはモード別の最大999刻+α（慶次1029刻+α）とし、ゲーム数換算値を同一定義へ混ぜない。

## sources
取得日: 2026-09-13

- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003263/
  - 山佐グループ、2023-02-06導入。
- P-WORLD: https://www.p-world.co.jp/machine/database/9753
  - モード構造、刻数、111刻期待度。
- K-Navi: https://p-kn.com/slot/3887/
  - 2023-02-06、ボーナス合算、AT初当たり。
- なな徹 総合: https://nana-press.com/kaiseki/machine/482/
  - 6.5号機AT、39.4G/50枚、純増1.8/4.0枚、天井。
- なな徹 スペック: https://nana-press.com/kaiseki/machine/482/12550/
  - 設定別ボーナス/AT、機械割、39.4G/50枚。
- なな徹 モード: https://nana-press.com/kaiseki/machine/482/13488/
  - モード別特徴・天井・111刻。
- パチマガスロマガ モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/11/tj04-2.php
  - 設定変更時/AT終了後のモード再抽選、モード別天井。
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/177507/
  - 設定変更/電源OFF→ONの天井・内部状態・開始ステージ、朝一恩恵。
- スロットセブン: https://slot-seven.com/sngkms3-tenzyou/
  - 2023-02-06、39.4G/50枚、純増、天井。
- イチカツ: https://ichikatsu.com/sengokumusou3/
  - 設定変更時天井RESET、純電断時引継ぎ、朝一カウンタと刻のズレ判別。
- 一撃: https://1geki.jp/slot/s_sngkms3/
  - モード別天井、AT構造。
- 型式照合: https://pachislobank.com/SHOP/s-yamasa0117.html
  - `Sパチスロ戦国無双3ZYTCD`。

## missingFields
- 検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の具体的モード振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/純電断時の内部モード直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電断単独の有利区間状態: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_MODE_RESELECT_AND_PUBLIC_MODE_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH
