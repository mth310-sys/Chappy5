# ぱちスロ 沖ハナ-30

No: 1407
machineName: ぱちスロ 沖ハナ-30
machineNameVariants: ぱちスロ 沖ハナ‐30 / ぱちスロ 沖ハナ-３０ / 沖ハナ / Sパチスロ沖ハナSPMA
manufacturer: オッケー.製造 / 京楽産業.ブランド
releaseDate: 2021-04-19
releaseNote: 一部店舗でのテスト導入開始日
formalModelName: Sパチスロ沖ハナSPMA
certificationNumber: 0S1612

generation: 6.1号機 / 30Φ
systemType: AT / 完全告知沖スロ / 擬似ボーナス連チャンタイプ

## identity / release
- 京楽産業.は2021-04-07に本機を発表し、2021-04-19から一部店舗でテスト導入すると業界一次報道で確認。
- HAZUSEで型式 `Sパチスロ沖ハナSPMA`、検定番号 `0S1612`、導入開始日2021-04-19を確認。
- P-WORLDはブランド/メーカーを京楽、製造をオッケー.と明記。検定通過記事も型式メーカーをオッケーとしているため、本DBでは「オッケー.製造 / 京楽産業.ブランド」と役割を分離する。
- reliability: INDUSTRY / INDUSTRY_DB / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.6% |
| 4 | 102.7% |
| 5 | 107.5% |
| 6 | 110.1% |
- 設定3を搭載しない5段階設定。
- HAZUSE、ちょんぼりすた、Pachi7等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/369.5 | 1/610.8 | 1/230.2 |
| 2 | 1/355.3 | 1/572.8 | 1/219.3 |
| 4 | 1/294.3 | 1/530.7 | 1/189.3 |
| 5 | 1/240.5 | 1/458.4 | 1/157.7 |
| 6 | 1/194.6 | 1/460.4 | 1/136.8 |
- 業界発表は初当たり合算の設定1約1/230.2〜設定6約1/136.8を公表。詳細BIG/REGは複数解析で一致。
- reliability: INDUSTRY（合算レンジ） / ANALYSIS_HIGH（設定別詳細）

## baseGamesPer50
- 約32G/50枚（設定1目安）。
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス: 約4.0枚/G。
- 業界発表・複数機種DBで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG BONUS: 約200枚。
- REG BONUS: 約40枚。
- 沖ハナBONUS: 平均約400枚とする機種DBあり。
- 花盛り: 7G継続のBIG 1G連ストック特化ゾーン、平均ストック約4個。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常A〜C / 天国チャンス / 引き戻し / 天国A〜Cなどの内部モードを持つ。
- BIG間天井は有利区間移行後最大999GでBIG当選濃厚。REGではBIG間天井をリセットしない。
- 厳密には、天国チャンス最大99G → 引き戻し → 通常モードABCの規定666Gという進行が公開されている。
- 通常の引き戻しモードは232G転落せず継続するとBIG当選（前回BIGからデータカウンタ上333G）。
- BIG後99G、REG後32Gは上位/特殊モードによる早期当選機会を持つ。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_NON_ADVANTAGEOUS_SECTION_DATA
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時はBIG間天井進行をRESETし、内部状態を再抽選、有利区間をRESETして非有利区間へ移行する。
- 設定変更後の有利区間移行先は「引き戻し / 天国チャンス / 天国」のいずれかから開始すると複数解析で一致。
- 設定変更後の引き戻しモードは通常時と異なり、転落せず332G継続するとBIG当選（データカウンタ上333G）。
- 非有利区間中は成立役に応じたBIG/花盛り特殊抽選を行う。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 設定据え置きで通常の電源OFF→ONを伴う営業日跨ぎは、公開されている純電断契約に従い、BIG間天井進行と内部状態を引き継ぐ。
- 有利区間ランプも純電断では状態を引き継ぐため、有利区間自体も継続扱いとする。
- 内部モードを「内部状態」と別項目として明示した直接表は十分な再探索後も固定できず、モード単独の契約は `UNVERIFIED_AFTER_RESEARCH` とする。
- reliability: ANALYSIS_HIGH（天井/内部状態/有利区間） / UNVERIFIED_AFTER_RESEARCH（モード単独表記）

### powerCycleBehavior
- 電源OFF→ONのみ: 天井CARRY_OVER / 内部状態CARRY_OVER / 有利区間ランプ状態CARRY_OVER。
- 内部モード単独の明示契約は `UNVERIFIED_AFTER_RESEARCH`。後継・類似沖スロから推測転記しない。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更時はBIG間天井進行をRESET。
- 電源OFF→ONのみではBIG間天井進行を引き継ぐ。
- 通常運用中のREG当選ではBIG間天井をリセットしない。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 通常の最大天井はBIG間999GでBIG当選濃厚。
- 設定変更後は「引き戻し / 天国チャンス / 天国」から開始するため、朝一は通常A〜Cから単純開始する契約ではない。
- 設定変更後に引き戻しモードが選ばれた場合、そのモードを転落せず332G継続でBIG当選（表示上333G）。これは設定変更時にだけ異なる条件付き短縮/仮天井として保存する。
- 天国/天国チャンス選択時はさらに早い当選機会があるが、設定変更専用の各モード振り分け率は未公表/未固定。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更後は引き戻し / 天国チャンス / 天国のいずれかから開始。
- 「基本は引き戻し」とする解析説明はあるが、設定変更専用の3モード間の正確な初期振り分け率は、表記揺れ・型式・メーカー名・朝一/設定変更/モード移行率を変えて複数資料を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 電源OFF→ON時の内部モード単独の直接契約も `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（開始候補） / UNVERIFIED_AFTER_RESEARCH（専用振り分け・純電断モード単独）

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 電源OFF→ONのみでは内部状態を引き継ぐ。
- 設定変更専用の状態初期振り分け率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時は有利区間RESET。朝一有利区間ランプは消灯。
- 電源OFF→ONのみでは有利区間ランプ状態を引き継ぐ。
- 有利区間ランプはWINセグ右のドット。通常時は基本点灯型で、設定変更時・BIG終了時の一部・完走時に非有利区間へ移行する。
- 非有利区間は通常ほぼ1Gで新しい有利区間へ移行する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は引き戻し / 天国チャンス / 天国スタートとなり、通常A〜C単純スタートより朝一の早期BIG機会を持つ。
- 設定変更後の引き戻しモードは転落せず332G継続でBIG当選（表示333G）。
- 設定変更後を含む非有利区間中は特殊抽選があり、チェリーでBIG 27.3% / 花盛り0.4%、確定役で花盛り100%、その他役でもBIG 0.1%。この数値は「設定変更専用」ではなく、設定変更後または通常の有利区間終了後を含む非有利区間共通値として定義を分離する。
- reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更で前日のBIG間天井進行と内部状態、有利区間を持ち越さないため、前日天井進行が深い台では据え置きに比べ蓄積価値を失う。
- 設定変更専用の初当たり悪化率など定量的な不利数値は、十分な再探索後も確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 通常時は有利区間ランプ基本点灯型。朝一ランプ消灯は設定変更濃厚、点灯は据え置き濃厚とされる。
- ただしBIG終了後の一部でも有利区間が切れてランプ消灯となるため、前日終了時のランプ状態を把握していない場合は確定判別にならない。店舗側対策も考慮する。
- ランプ位置はWINセグ右のドットで、CREDITセグのドットと混同しない。
- 本機固有のリールガックン発生条件/発生率は、機種名・型式・「ガックン / 朝一 / リール始動 / 設定変更」を変えて再探索しても高信頼情報を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（有利区間ランプ） / UNVERIFIED_AFTER_RESEARCH（ガックン）

### numericResetData
- 設定変更後の引き戻しモード継続天井: **332G継続でBIG当選（データカウンタ上333G）**。
- 非有利区間中のチェリー: **BIG 27.3% / 花盛り0.4%**。
- 非有利区間中の確定役: **花盛り100%**。
- 非有利区間中の上記以外: **BIG 0.1%**。
- 上記非有利区間数値は設定変更後専用ではなく、有利区間終了後にも共通する公開値。
- 設定変更専用の引き戻し / 天国チャンス / 天国 初期振り分け率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の内部状態振り分け率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 導入日は2021-04-19をcanonicalとするが、これは京楽発表に基づく「一部店舗テスト導入開始日」。後発DBに全国導入相当の別月表記があるため、通常全国導入日と混同しない。
- メーカー表記は京楽/オッケー.が混在するが、P-WORLDが「メーカー 京楽 / 製造 オッケー.」と明示し、検定通過資料はオッケー名義。数値競合ではなく役割差として統合する。
- 天井は「BIG間最大999G」と「通常モード移行後666G」の表現があるが、後者は内部モード進行を分解した定義であり同一指標の数値競合ではない。双方を保持する。

## missingFields
- 設定変更専用の引き戻し / 天国チャンス / 天国の正確な初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ON時の内部モード単独の明示契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の内部状態初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://amusement-japan.co.jp/article/detail/10002232/ — 業界発表、2021-04-19テスト導入、基本性能・初当たりレンジ（INDUSTRY）
- https://www.amusement-japan.co.jp/article/detail/10002257/ — テスト導入実施、初当たりレンジ、純増、獲得枚数（INDUSTRY）
- https://hazuse.com/machine/pachislot/9S1805/ — 型式/検定番号、設定別確率/出玉率、天井、内部モード、非有利区間抽選（ANALYSIS_HIGH / INDUSTRY_DB）
- https://www.p-world.co.jp/machine/database/9382 — 京楽ブランド/オッケー.製造、基本性能（INDUSTRY_DB）
- https://chonborista.com/slot/kyoraku-slot/137084/ — 朝一設定変更/純電断表、有利区間、リセット後モード、天井（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_okihana/42/ — モード構造、設定変更後開始モード、設定変更時引き戻し332G（ANALYSIS_HIGH）
- https://pachiseven.jp/machines/6286/cutout/9 — モード移行・引き戻し解析（ANALYSIS_HIGH）
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/12/bn03.php — 花盛り構造/非有利区間確定役（ANALYSIS_HIGH）
- https://www.pachibee.jp/machines/about/221040001 — 導入日/ゲームフロー/基本獲得性能（INDUSTRY_DB）
- https://www.slopachi-quest.com/article/okihana-tenjou/ — 有利区間ランプ変更判別と前日消灯例外（ANALYSIS_SINGLE）
- https://p-media.info/post-26303/ — 型式/オッケー検定通過、4/19先行導入（INDUSTRY）
