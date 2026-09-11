# パチスロガールズ＆パンツァー 劇場版

No: 1416
machineName: パチスロガールズ＆パンツァー 劇場版
machineNameVariants: ガールズ&パンツァー 劇場版 / ガルパン劇場版 / Sガールズ＆パンツァー劇場版H4
manufacturer: オリンピア（平和グループ）
releaseDate: 2021-06-07
formalModelName: Sガールズ＆パンツァー劇場版H4
certificationNumber: 0S1509

generation: 6.1号機
systemType: AT / 擬似ボーナス経由・完全自力バトルAT

## identity / release
- HAZUSEで型式 `Sガールズ＆パンツァー劇場版H4`、検定番号 `0S1509`、メーカー オリンピア、6.1号機AT、導入開始2021-06-07を確認。
- 2021-04-15の遊技通信/P-WORLD業界記事でも平和発表機として型式名、純増2.5枚/G、初当り・AT確率、6月上旬導入予定を確認。
- 1geki、なな徹、当時新台一覧も2021-06-07で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 101.7% |
| 4 | 104.8% |
| 5 | 108.1% |
| 6 | 110.2% |
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### 初当り合算
| 設定 | 初当り |
|---:|---:|
| 1 | 1/196.6 |
| 2 | 1/191.0 |
| 3 | 1/177.3 |
| 4 | 1/164.2 |
| 5 | 1/151.5 |
| 6 | 1/144.2 |

### AT「戦車道」
| 設定 | AT |
|---:|---:|
| 1 | 1/539.9 |
| 2 | 1/521.9 |
| 3 | 1/472.3 |
| 4 | 1/433.4 |
| 5 | 1/397.1 |
| 6 | 1/375.6 |
- 遊技通信、1geki、なな徹等で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約34.5〜34.8G/50枚。
- なな徹、ちょんぼりすた、当時新台一覧で整合。
- reliability: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス / AT「戦車道」: 約2.5枚/G。
- 業界記事・HAZUSE・複数解析で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- GIRLS und BONUS: 40G+α。純増2.5枚/Gのため基本は約100枚程度の獲得性能。
- エピソードボーナス: 43G、AT突入濃厚。
- AT「戦車道」: 50G+αの中隊バトルを軸とする自力継続型。設定1〜6の平均TYは約510.2〜514.4枚の公開値あり。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は左1stベル5回成立ごとに進軍ポイントを獲得し、5pt単位で初当り抽選。
- 通常A / 通常B / 通常C / 通常D / 天国A / 天国Bの6モード。
- モード別進軍ポイント天井: 通常A 25pt / 通常B 20pt / 通常C 20pt / 通常D 15pt / 天国A 10pt / 天国B 5pt。
- 最大25pt到達までの平均ゲーム数は約455G。
- 通常Aの25pt天井到達時は白7またはエピソードボーナス濃厚。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_APPLICABLE_RESET_CORE_WITH_PUBLIC_MODE_TABLE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間、天井、進軍カウンター、内部モード、内部状態をRESET。
- 新たな有利区間移行時にモードを再抽選。
- 液晶開始ステージは `仮校舎 / お泊り会 / 露天風呂` のいずれかで、ステージ単独では設定変更確定にならない。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は天井、進軍カウンター、内部モード、内部状態、有利区間をCARRY_OVER。
- 朝一数ゲームしか回っていないのに進軍カウンターが大きく進んでいる場合は据え置き材料となる。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井、進軍カウンター、内部モード、内部状態、有利区間を基本CARRY_OVER。
- 液晶ステージは通常時は `仮校舎 / お泊り会 / 露天風呂` のいずれかへ。CZ・ボーナス・AT中の電断ではその状態を引き継ぐ。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 進軍カウンター / 天井進行をRESET。
- 据え置き / 純電断: CARRY_OVER。
- 天井はゲーム数そのものではなく進軍ポイントで管理され、最大25pt（平均約455G）。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認できない。
- 設定変更後は新規有利区間でモードを再抽選し、そのモードに対応する5〜25pt天井が適用される。
- したがって朝一の最大天井は通常A選択時25ptであり、固定の「リセット短縮G数」として扱わない。

### modeAfterReset
- 設定変更後は有利区間移行時の公開モード振り分けを適用。
- 非レア役で有利区間移行した場合の振り分け:

| 設定 | 通常A | 通常B | 通常C | 通常D | 天国A | 天国B |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 40.2% | 40.2% | 16.4% | 1.2% | 1.6% | 0.4% |
| 2 | 40.2% | 39.1% | 16.4% | 1.6% | 2.0% | 0.8% |
| 3 | 40.2% | 34.0% | 16.4% | 2.0% | 6.3% | 1.2% |
| 4 | 40.2% | 31.6% | 16.4% | 2.3% | 7.8% | 1.6% |
| 5 | 40.2% | 30.1% | 16.4% | 2.7% | 8.6% | 2.0% |
| 6 | 40.2% | 28.9% | 16.4% | 3.1% | 9.0% | 2.3% |

- 有利区間移行ゲームで弱チェリー/双眼鏡成立時は通常C 50.0% / 通常D 25.0% / 天国A 18.8% / 天国B 6.3%。
- 強チェリー/チャンス目成立時は天国A 75.0% / 天国B 25.0%。
- これらは設定変更専用ではなく、新規有利区間移行時共通の公開値として保存。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態RESET/再抽選。
- 据え置き / 純電断: 内部状態CARRY_OVER。
- 有利区間移行時にも高確移行抽選が存在するが、設定変更専用の高確初期振り分け表として独立した数値は確認できない。
- reliability: ANALYSIS_HIGH / UNVERIFIED(partial numeric state table)

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- ボーナスまたはAT終了後は有利区間を必ず切り、引継ぎは発生しない。
- 通常時は有利区間ランプ点灯型。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更専用の固定天井短縮や専用AT直撃率など、独立した朝一恩恵は確認できない。
- 新規有利区間開始時のモード再抽選そのものが朝一挙動を決める。設定6では天国A/B合算11.3%、設定1では2.0%。
- 有利区間移行ゲームで強レア役を引いた場合は天国A以上、弱チェリー/双眼鏡なら通常C以上となる。

### resetPenalties
- 前日の進軍ポイント、モード、内部状態を失うため、据え置きなら価値がある進行状態だった場合は設定変更でその価値を失う。
- 設定変更専用の独立した定量的不利率は確認できない。

### resetDetection
- 通常時から有利区間ランプが点灯するタイプ。
- 朝一消灯: 設定変更濃厚。
- 朝一点灯: 据え置き濃厚。
- 前日が非有利区間中で閉店した場合や店側対策があるため確定判別ではない。
- 進軍カウンターが朝一数ゲームに対して大きく進んでいる場合も据え置き材料。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー名に `ガックン / リセット / 設定変更 / 朝一 / 据え置き` を組み替え、HAZUSE・解析サイト・旧攻略資料を横断したが高信頼の固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 非レア役で有利区間移行時のモード振り分けは上表。
- 設定1: 天国A/B合算2.0%、通常D以上3.2%、通常C以上19.6%。
- 設定6: 天国A/B合算11.3%、通常D以上14.4%、通常C以上30.8%。
- 有利区間移行時の弱チェリー/双眼鏡: 通常C以上100%、うち天国A/B25.1%。
- 有利区間移行時の強チェリー/チャンス目: 天国A/B100%。
- 設定変更専用の固定短縮天井: 確認できず。

## missingFields
- 本機固有のリールガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用として独立した内部高確/低確の確率付き初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。有利区間移行時の高確抽選存在は確認済み。

## conflicts
- 主要性能・導入日・天井・リセット契約に実用上の数値競合なし。
- メーカー表記は資料により「平和」「オリンピア」が混在するが、製造/ブランド系統の表記差として扱い、本レコードはオリンピア（平和グループ）をcanonicalとする。

## sources
取得日: 2026-09-12
- https://hazuse.com/machine/pachislot/0S1509/ — 型式、検定番号、導入日、メーカー、6.1号機AT、純増
- https://hazuse.com/machine/pachislot/0S1509/genre/201/ — 基本スペック
- https://hazuse.com/machine/pachislot/0S1509/genre/207/ — 天井、設定変更/電断、有利区間ランプ、進軍カウンター、モード/状態引継ぎ
- https://news.p-world.co.jp/articles/16298/yugitsushin — 2021-04-15業界発表、型式、純増、初当り/AT、6月上旬導入
- https://1geki.jp/slot/s_ggp/ — 導入日、初当り/AT、ゲームフロー
- https://nana-press.com/kaiseki/machine/130/ — 仕様、純増、50枚ベース、導入日
- https://nana-press.com/kaiseki/machine/130/3639/ — ボーナス/AT確率、機械割
- https://nana-press.com/kaiseki/machine/130/3643/ — モード別天井、有利区間移行時レア役モード抽選
- https://nana-press.com/kaiseki/machine/130/4134/ — 通常時モード、進軍pt天井
- https://chonborista.com/slot/orinpia-slot/137100/ — 性能コア、朝一リセット、有利区間、設定別モード抽選
- https://slotjin.com/tenjoukitaichi/girlsundpanzer/ — 有利区間移行時モード振り分け全設定、朝一リセット判別
- https://ichikatsu.com/newslot/ — 2021-06-07新台一覧・基本性能
