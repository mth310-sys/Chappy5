# パチスロ ゴッドイーター ジ・アニメーション

No: 1392
machineName: パチスロ ゴッドイーター ジ・アニメーション
machineNameVariants: パチスロ ゴッドイーター ジ・アニメーション / ゴッドイーター ジ・アニメーション / GOD EATER THE ANIMATION / SパチスロゴッドイータージアニメSLHH
manufacturer: セブンリーグ
releaseDate: 2021-02-08
formalModelName: SパチスロゴッドイータージアニメSLHH
certificationNumber: 0S1116

generation: 6.1号機
systemType: AT / CZ経由 / 純増可変型AT

## identity / release
- HAZUSEで型式 `SパチスロゴッドイータージアニメSLHH`、検定番号 `0S1116`、メーカー「セブンリーグ」、導入開始日2021-02-08を確認。
- グリーンべるとでもセブンリーグ製として2021-02-08からホール導入開始を確認。
- 山佐ネクスト / 山佐系の関連表記があるが、本レコードのmanufacturerは型式・機種DB表記に合わせセブンリーグとする。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 98.8% |
| 3 | 99.7% |
| 4 | 102.7% |
| 5 | 106.9% |
| 6 | 109.0% |
- 1geki、HAZUSE、なな徹、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
主要公開初当たりとしてCZ「アラガミ殲滅バトル」を採用する。

| 設定 | アラガミ殲滅バトル |
|---:|---:|
| 1 | 1/440.7 |
| 2 | 1/433.1 |
| 3 | 1/426.3 |
| 4 | 1/405.2 |
| 5 | 1/369.9 |
| 6 | 1/356.9 |
- 1geki、HAZUSE、なな徹、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51.0G/50枚。
- HAZUSE、なな徹、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「アラガミバースト」はバーストレベルに応じて約2.5 / 3.5 / 4.5 / 5.5 / 8.0枚/Gの5段階。
- グリーンべると、パチビー、1geki、HAZUSEで純増可変仕様を確認。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT初当たり時は初期ゲーム数上乗せ特化ゾーン「神機暴走」へ突入。
- 神機暴走は7G継続、平均上乗せ約74G。
- ATはゲーム数管理かつ純増可変型のため、固定獲得枚数は設定しない。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時の天井モードは通常A / 通常B / SPモードA / SPモードB。
- モード別天井は通常A 777G+α、通常B 555G+α、SP-A 400G+α、SP-B 400G+α。天井到達後のベルナビから前兆を経てCZ「アラガミ殲滅バトル」へ突入。
- CZ成功期待度の公開値は通常A/B 38.1%、SP-A 50.9%、SP-B 80.0%。
- 有利区間リセット時は通常AまたはSP-A、有利区間引継ぎ時は通常BまたはSP-B。AT終了後に有利区間を引き継いだ場合はSP-B濃厚。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MODE_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井G数RESET、内部状態RESET。
- 有利区間はRESETされ、新規有利区間へ移行する。
- 新規有利区間開始時は通常AまたはSP-Aを設定別に再抽選する。
- 設定変更後の液晶ステージは高信頼資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は天井G数・内部モード/状態・有利区間進行をCARRY_OVER側として扱う。
- 有利区間を前日から引き継いでいる場合、朝一有利区間ランプ点灯が据え置き判別材料となる。
- ただし本機は通常時ランプ消灯型で、消灯だけでは設定変更確定にならない。

### powerCycleBehavior
- 純電源OFF→ONでは天井G数を引き継ぐ。
- 内部状態/モードも引き継ぐ。
- 有利区間も設定変更を伴わない限り継続側として扱う。
- 電源ON後の液晶ステージは資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の固定短縮天井はない。
- ただし新規有利区間でSP-Aが選ばれた場合は天井400G+αとなるため、結果として通常Aの777G+αより浅くなる。
- 通常A: 777G+α / SP-A: 400G+α。

### modeAfterReset
- 設定変更後は新規有利区間開始に伴い、通常AまたはSP-Aへ再抽選。
- 公開振り分け:

| 設定 | 通常A | SP-A |
|---:|---:|---:|
| 1 | 91.0% | 9.0% |
| 2 | 80.1% | 19.9% |
| 3 | 80.1% | 19.9% |
| 4 | 60.9% | 39.1% |
| 5 | 34.0% | 66.0% |
| 6 | 18.2% | 81.8% |

- HAZUSEと必勝本系記事で同値を照合。
- これは設定変更専用抽選というより「有利区間開始時」共通テーブルだが、設定変更後は有利区間を新規開始するため朝一挙動に直接適用される。

### stateAfterReset
- 設定変更時: RESET後、新規有利区間の状態抽選を受ける。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間移行時は高確以上から開始するとする解析あり。
- 通常モードA/B時の公開振り分けは高確80.5% / 超高確19.5%。SPモード時の詳細振り分けは高信頼資料でも調査中のため補完しない。

### advantageousSectionReset
- 設定変更: RESET / 新規有利区間へ。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- CZ失敗後またはAT終了後にも条件次第で有利区間引継ぎが発生するため、朝一ランプ点灯時は前日からの引継ぎ状態を疑える。

### resetBenefits
- 新規有利区間開始時にSP-Aが選択されれば天井400G+αとなり、CZ成功期待度も通常A/Bの38.1%に対しSP-Aは50.9%。
- SP-A選択率は設定1 9.0%〜設定6 81.8%で高設定ほど大幅に高い。
- 有利区間開始1G目からCZ/前兆抽選を行うため、旧6号機のような固定無抽選区間を前提にしない。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。

### resetDetection
- 有利区間ランプはクレジット右下のドット。
- 本機は通常時基本消灯型。有利区間引継ぎ時は点灯したままになるため、朝一点灯なら据え置き + 有利区間引継ぎ濃厚。
- 朝一消灯は設定変更でも据え置きでも起こり得るため、消灯だけで変更確定とはしない。
- 朝一/有利区間移行直後のPUSHボイスでSPモード期待度、上部ランプ色でベースナビシナリオを示唆するが、設定変更そのものの確定判別ではない。
- 本機固有のリールガックン条件/発生率は表記揺れ・型式名・メーカー名・設定変更/リセット/据え置きで再探索しても直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 有利区間開始時SP-A選択率: 設定1 9.0% / 設定2 19.9% / 設定3 19.9% / 設定4 39.1% / 設定5 66.0% / 設定6 81.8%。
- 有利区間開始時通常A選択率: 91.0 / 80.1 / 80.1 / 60.9 / 34.0 / 18.2%。
- 通常A天井: 777G+α。
- SP-A天井: 400G+α。
- CZ成功期待度: 通常A/B 38.1% / SP-A 50.9% / SP-B 80.0%。
- 通常モード有利区間移行時状態: 高確80.5% / 超高確19.5%。

## sources
取得日: 2026-09-12

1. グリーンべると「【2/8新台】純増変動型AT（2.5枚～8枚）搭載のゴッドイーター最新作」
   - https://web-greenbelt.jp/post-44076/
   - 2021-02-08導入開始、セブンリーグ製、純増2.5〜8.0枚/G、有利区間1G目からAT初当たりを目指せる仕様を確認。
   - reliability: INDUSTRY

2. HAZUSE「パチスロ ゴッドイーター ジ・アニメーション」
   - https://hazuse.com/machine/pachislot/0S1116/
   - 型式、検定番号、導入日、CZ初当たり、機械割、51G/50枚、モード天井、有利区間開始時モード振り分けを確認。
   - reliability: ANALYSIS_HIGH

3. 1geki「パチスロ ゴッドイーター ジ・アニメーション」
   - https://1geki.jp/slot/s_gea/
   - 設定別CZ初当たり/機械割、導入日、AT純増5段階を確認。
   - reliability: ANALYSIS_HIGH

4. 1geki「通常時のモード/状態移行抽選」
   - https://1geki.jp/slot/s_gea/41/
   - モード別天井/CZ成功期待度、有利区間移行時状態、高確80.5%/超高確19.5%を確認。
   - reliability: ANALYSIS_HIGH

5. ちょんぼりすた「Sゴッドイーター ジ・アニメーション」
   - https://chonborista.com/slot/yamasa-slot/124052/
   - 設定変更時の天井・状態RESET、純電源OFF→ON時の天井・状態引継ぎ、有利区間リセット/引継ぎ、朝一判別を確認。
   - reliability: ANALYSIS_HIGH

6. 期待値見える化「ゴッドイーター ジ・アニメーション」
   - https://slotjin.com/tenjoukitaichi/godeateranime/
   - 設定変更後は天井G数RESET・通常A/SP-A、据え置き/電断側は天井・内部モード引継ぎ、有利区間ランプ判別を別系統で照合。
   - reliability: ANALYSIS_HIGH

7. なな徹「ボーナス確率/機械割」「通常時のモード」「通常時の状態」
   - https://nana-press.com/kaiseki/machine/99/2465/
   - https://nana-press.com/kaiseki/machine/99/2864/
   - https://nana-press.com/kaiseki/machine/99/2865/
   - CZ初当たり/機械割、モード別天井、有利区間引継ぎ、約51.0G/50枚を照合。
   - reliability: ANALYSIS_HIGH

8. パチビー「パチスロ ゴッドイーター ジ・アニメーション」
   - https://www.pachibee.jp/machines/about/220120000
   - 導入日、6.1号機AT、純増約2.5〜8.0枚/G、ゲーム性を確認。
   - reliability: ANALYSIS_HIGH

## missingFields
- 設定変更後/純電断後の液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH。
- SP-A/SP-Bでの有利区間移行時「高確/超高確」詳細比率: UNVERIFIED_AFTER_RESEARCH。
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH。

## conflicts
- NONE_MATERIAL_CONFIRMED。
- メーカー表記は資料により「セブンリーグ」「山佐」と表現差があるが、型式DB/業界記事の製造表記を優先してmanufacturerをセブンリーグとし、山佐系関連表記はidentity注記に残す。
