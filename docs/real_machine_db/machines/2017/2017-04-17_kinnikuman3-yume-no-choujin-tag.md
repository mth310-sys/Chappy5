machineName: パチスロ キン肉マン ～夢の超人タッグ編～
manufacturer: 山佐
releaseDate: 2017-04-17
recordNumber: 1067
generation: 5号機
systemType: ART / バトル継続型
formalModelName: パチスロキンニクマン3／CC
certificationNumber: 6S1492
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_VERIFICATION

## identity
- HAZUSEで型式 `パチスロキンニクマン3／CC`、検定番号 `6S1492`、導入開始日2017-04-17、メーカー山佐を確認。
- すろぱちくえすと、ちょんぼりすた、2017年当時のぱちガブ試打告知も2017-04-17導入で一致。
- 一部整理一覧に2017-04-03表記が残るが、複数の機種個別資料・当時導入前告知が4/17で一致するためcanonicalは2017-04-17。競合は保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.6% |
| 3 | 99.6% |
| 4 | 105.1% |
| 5 | 112.1% |
| 6 | 112.3% |
- すろぱちくえすと、ちょんぼりすた系解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/428.3 |
| 2 | 1/413.5 |
| 3 | 1/415.3 |
| 4 | 1/383.4 |
| 5 | 1/372.6 |
| 6 | 1/357.2 |
- HAZUSE、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約46G/50枚。
- すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「マッスルタイム」: 約2.0枚/G。
- 継続ゲーム数は固定ではなく、バトル目成立→超人タッグバトル勝利で継続するタイプ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「マッスルタイム」: バトル目成立まで継続、バトル勝利で次セット継続。
- CZ「火事場のクソ力モード」最大6G、ART期待度約50%。
- CZ「悪魔の小箱」最大20G、ART期待度約50%。
- ART中疑似ボーナス「ガガガGUTS!!ボーナス」30G。
- 実機完全再現用の全バトル勝率/ストック詳細はSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時に通常A / 通常B / 天国 / 超天国の4モードが存在し、ART初当たりやART側性能へ影響。
- ART間天井は1200G+前兆でART確定。
- 400G・800Gでは特殊高確「はぐれ悪魔超人コンビステージ」へ必ず移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_VERIFIED_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 通常時モード: RESELECT。設定変更時専用の設定別モード振り分けが公開されている。
- ART間1200G天井のゲーム数が設定変更でRESETされるかについて、今回確認できた機種固有資料は明示表を持たず、一般論から補完しないため `UNVERIFIED_AFTER_RESEARCH`。
- TAG状態等の一時内部状態、RT状態の設定変更契約: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_MODE_RESELECT; UNVERIFIED_FOR_OTHER_STATE_CONTRACTS

### carryOverBehavior
- 据え置き時、前日ステージと朝一最初のチャンス役/TAG表示の組み合わせ、および100G周期の特殊高確移行位置が据え置き推測材料として解析されている。
- ART間天井・通常時モード・TAG状態等の厳密な据え置き契約を一括で直接明記した機種固有資料は今回固定できず、項目別に `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_DETECTION_CLUES; UNVERIFIED_FOR_FULL_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON時のART間天井、通常時モード、TAG状態/RT状態の本機固有直接契約は、機種名・型式・設定変更・据え置き・電源OFF ON等で資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更挙動を純電断へ流用しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- normalCeiling: ART間1200G+前兆。
- settingChange: `UNVERIFIED_AFTER_RESEARCH`（直接契約未固定）。
- carryOver/powerCycle: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井: ART間1200G+前兆。
- 設定変更専用の短縮天井数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 1200G自体の設定変更後再スタート契約は直接資料未固定のため推定しない。

### modeAfterReset
- settingChange: RESELECT。
- 設定変更時モード振り分け:
  - 設定1: 通常A71.9% / 通常B15.2% / 天国12.5% / 超天国0.4%
  - 設定2: 通常A64.1% / 通常B20.3% / 天国15.2% / 超天国0.4%
  - 設定3: 通常A64.1% / 通常B15.2% / 天国20.3% / 超天国0.4%
  - 設定4: 通常A46.9% / 通常B20.3% / 天国12.5% / 超天国20.3%
  - 設定5: 通常A37.5% / 通常B25.0% / 天国25.0% / 超天国12.5%
  - 設定6: 通常A44.5% / 通常B30.1% / 天国15.2% / 超天国10.2%
- powerCycle/carryOver: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE_DISTRIBUTION

### stateAfterReset
- TAG状態、特殊高確の一時状態等の設定変更/純電断契約: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時モードと一時内部状態を混同しない。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時は通常時モードを再選択し、設定に応じて天国/超天国スタートの可能性がある。
- 設定4では超天国20.3%、設定5では天国25.0%+超天国12.5%、設定6では天国15.2%+超天国10.2%。
- 独立した短縮天井や設定変更専用CZ保証: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の明確な不利抽選: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井進捗消去は直接契約を固定できていないためペナルティとして断定しない。

### resetDetection
- 朝一1回目のチャンス役成立時、前日の対応ステージと異なる役で液晶右にTAG表示が出れば設定変更期待度が大幅UPと当時解析。
- 100Gごとの特殊高確移行位置を利用可能。100の倍数以外で特殊高確へ移行した場合は据え置き濃厚材料。
- いずれも確定契約ではなく実戦上の推測材料として保持。
- 本機固有のガックンによる確定変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_PRACTICAL_CLUES

### numericResetData
- settingChangeModeDistribution:
  - setting1: normalA 71.9%, normalB 15.2%, heaven 12.5%, superHeaven 0.4%
  - setting2: normalA 64.1%, normalB 20.3%, heaven 15.2%, superHeaven 0.4%
  - setting3: normalA 64.1%, normalB 15.2%, heaven 20.3%, superHeaven 0.4%
  - setting4: normalA 46.9%, normalB 20.3%, heaven 12.5%, superHeaven 20.3%
  - setting5: normalA 37.5%, normalB 25.0%, heaven 25.0%, superHeaven 12.5%
  - setting6: normalA 44.5%, normalB 30.1%, heaven 15.2%, superHeaven 10.2%
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- すろぱちくえすとの年別一覧には4/3表記が残る一方、同サイト機種個別記事、ちょんぼりすた、HAZUSE、2017-03-24公開のぱちガブ試打告知はいずれも4/17を示す。canonicalは4/17、単一整理一覧の4/3はCONFLICT保持。
- 設定変更時モード振り分けは複数解析で一致し公開朝一数値として採用。
- 電源OFF→ON・据え置き・一時状態については一般的5号機挙動から推測補完していない。

## conflicts
- `RELEASE_DATE`: 2017-04-17（HAZUSE / すろぱちくえすと機種個別 / ちょんぼりすた / ぱちガブ当時告知） vs 2017-04-03（すろぱちくえすと年別整理一覧、古い単一解析整理）。canonical=2017-04-17。

## missingFields
- settingChange gameCounterReset direct contract: UNVERIFIED_AFTER_RESEARCH
- carryOver full contract: UNVERIFIED_AFTER_RESEARCH
- powerCycle full contract: UNVERIFIED_AFTER_RESEARCH
- transient state/RT reset contract: UNVERIFIED_AFTER_RESEARCH
- detailed internal draw tables: SCOPE_EXCLUDED

## sources
retrievedAt: 2026-09-09
- https://hazuse.com/machine/pachislot/6S1492/ — 型式、検定番号、導入日、ART初当たり、天井、設定変更時モード振り分け
- https://hazuse.com/machine/pachislot/6S1492/genre/208/ — ART初当たりクロスチェック
- https://www.slopachi-quest.com/article/kinnikuman3/ — 性能コア、天井、設定変更時モード振り分け、変更/据え置き推測材料
- https://chonborista.com/slot/yamasa-slot/33436/ — 導入日、約46G/50枚、純増、天井、性能コア照合
- https://www.youtube.com/watch?v=fFs_RngXoTE — 2017-03-24公開ぱちガブ試打告知、2017-04-17全国導入予定
- https://1geki.jp/newmachinecalender/201704/ — 4/17群クロスチェック
- https://www.slopachi-quest.com/article/2017-sindai/ — 4/3表記の競合資料
