# PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編

No: 1367
machineName: PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編
machineNameVariants: リングにかけろ1 ワールドチャンピオンカーニバル編 / リンかけ1 WCC / Sリングにかけろ1 / S RK1 WCC編YB
manufacturer: スパイキー（製造） / エンターライズ（開発） / フィールズ（総発売元）
releaseDate: 2020-09-23
formalModelName: S RK1 WCC編YB
certificationNumber: 0S0442

generation: 6号機
systemType: AT / 差枚数管理型AT / 周期+CZ / 有利区間管理

## identity / release
- HAZUSEで型式 `S RK1 WCC編YB`、検定番号 `0S0442`、メーカー「スパイキー」、導入開始日2020-09-23を確認。
- グリーンべるとの2020-07-17業界記事では、製造元=スパイキー、開発=エンターライズ、総発売元=フィールズと明記。
- イチカツ、ちょんぼりすた等も2020-09-23全国導入で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.0% |
| 3 | 100.8% |
| 4 | 104.5% |
| 5 | 107.0% |
| 6 | 110.1% |
- HAZUSE、イチカツ、pacnkで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「チャンピオンロード」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/499.4 |
| 2 | 1/476.5 |
| 3 | 1/462.5 |
| 4 | 1/424.6 |
| 5 | 1/416.9 |
| 6 | 1/381.3 |
- HAZUSE、イチカツ、pacnkで一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50G/50枚（全設定共通）。
- HAZUSE、イチカツ、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT純増 約3.1枚/G。
- HAZUSE、パチマガスロマガ、イチカツ、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## basicPayout
- AT「チャンピオンロード」は差枚数管理型。
- AT初期枚数は100〜250枚。
- 赤7揃いが基本。青7揃い時は開始時からベース枚数を保持し、ビクトリーラッシュへ繋がる優遇あり。
- 影道総帥フリーズ発生時はAT初期枚数1000枚濃厚。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は基本1周期50G。周期内に100pt到達を目指し、100pt到達時は報酬パート「闘志チャンス」、非到達時はCZ「ギリシアバトル」へ移行。
- 周期内100pt到達期待度は約75%。
- 天井は有利区間移行後999G。到達時はAT当選濃厚かつ青7選択率優遇。
- 真・ギリシアバトルは有利区間開始時や竜児勝率80%超時に発生しやすく、勝利時は青7濃厚。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は有利区間RESET→非有利区間へ移行。
- 天井までのゲーム数RESET。
- モード再抽選、内部状態再抽選。
- 液晶のポイント表示は「??」表示へRESET。
- HAZUSEは設定変更後について「1回目のCZが真・ギリシアバトルになりやすい」と整理。
- パチマガスロマガでは、設定変更時は真・ギリシアバトル相当の内部当選でも通常の告知を行わず、勝利時に青7として恩恵が出る場合があると説明。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は、設定変更を伴わない電源OFF→ONと同様に、有利区間・天井ゲーム数・モード・内部状態をCARRY_OVERする挙動として扱う。
- 液晶ポイント表示は「??」へ見かけ上クリアされるが、内部ポイントはCARRY_OVER。
- 通常時の1周期50G進行も内部的には引き継がれるため、前日周期途中なら朝一50G未満で周期到達する可能性があり据え置き推測材料になる。
- reliability: ANALYSIS_HIGH for internal carry-over / ANALYSIS_SINGLE for cycle-based detection practical rule

### powerCycleBehavior
- HAZUSEの「設定変更&電源ON・OFF時」比較表で、純電源OFF→ONは有利区間・天井までのゲーム数・モード・状態をすべて引き継ぐ。
- ポイント表示は「??」になるが内部的には引き継ぐ。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井G RESET。
- 据え置き / 純電源OFF→ON: 天井G CARRY_OVER。
- 通常時の周期進行も据え置きでは内部CARRY_OVERとみられ、朝一周期到達G数が変更判別の補助材料になる。

### ceilingAfterReset
- 設定変更後は0G相当から新有利区間を開始し、通常の最大天井999Gが適用。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時はAT当選濃厚+青7選択率優遇。

### modeAfterReset
- 設定変更: モード再抽選。
- 据え置き / 純電源OFF→ON: モードCARRY_OVER。
- 設定変更専用の全モード振り分け表は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間開始時の真・ギリシアバトル発展率20.3%という公開値は確認できるが、これは設定変更専用表ではなく「有利区間開始時」の一般値として扱う。

### stateAfterReset
- 設定変更: 内部状態再抽選。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- さらに細かな状態別初期振り分けは本DB目的上必要な設定変更専用公開値を固定できず、推測補完しない。

### advantageousSectionReset
- 設定変更: RESET→非有利区間。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時・CZ中は有利区間ランプ消灯、AT中のみ点灯する仕様。このため朝一の有利区間ランプだけでは設定変更/据え置きを判別できない。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後の最初のCZは真・ギリシアバトル相当が選ばれやすい。
- 有利区間開始時の真・ギリシアバトル発展率は公開解析で20.3%。ただし設定変更時は告知仕様が異なり、内部的に真・ギリシアバトルでも通常表示されず、勝利時の青7恩恵として現れる場合がある。
- 固定短縮天井やAT直撃保証は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置きで保持される天井進行・周期進行・内部アイコン/ポイント等を設定変更で消去する場合があるが、設定変更固有の定量的不利として公表された値は確認できない。

### resetDetection
- 有利区間ランプは通常時/CZ中に消灯する仕様のため、朝一ランプによる変更判別は不可。
- 前日が周期途中だった場合、朝一の周期到達が50Gより前なら据え置き推測材料。朝一50Gで通常どおり周期到達すれば設定変更寄りの補助材料となるが、前日状況次第で判別不能なため確定扱いしない。
- 液晶ポイントは設定変更でも電断でも「??」表示となるため、それ単独では判別不可。ただし電断のみでは内部ポイントが引き継がれる。
- 真・ギリシアバトルの朝一告知仕様は特殊で、設定変更時は内部真ギリシア相当でも通常告知されない。これを確定判別に使うことについては当時解析でも「調査中」注記があるため `WEAK_SIGNAL_ONLY`。
- 本機固有のガックン条件・発生率は、機種名/型式/メーカーと `ガックン / 朝一 / 設定変更 / 据え置き / リール` を組み替え、HAZUSE、当時攻略、後年DBを再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
有利区間開始時の真・ギリシアバトル発展率:
- **20.3%**（1geki）。
- 設定変更後にも有利区間開始が発生するため朝一比較に利用できるが、設定変更専用値ではない。

比較用:
- ギリシアバトル敗北後: 4.7%
- 竜児勝率80%超時: 31.3%
- 朝一恩恵の相対的位置づけを説明する補助値として保持。

## resetBehavior 再探索メモ
2026-09-11。`リングにかけろ1 ワールドチャンピオンカーニバル編 / リンかけ1 WCC / S RK1 WCC編YB / スパイキー / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源ON OFF / 天井 / モード / 状態 / 周期 / ポイント / 真ギリシア / ガックン / 有利区間 / 有利区間ランプ` を組み替え、HAZUSE、グリーンべると、パチマガスロマガ、1geki、イチカツ、ちょんぼりすた、すろぱちくえすと、pacnk等を横断。設定変更と純電断の天井・モード・状態・有利区間差、液晶ポイント表示と内部保持の差、有利区間開始時真ギリシア20.3%まで固定。本機固有ガックンおよび設定変更専用の全モード振り分けは固定できず推測補完しない。

## conflicts
- manufacturer表記: HAZUSE等ではメーカー「スパイキー」、一部攻略資料では「エンターライズ」と表記。グリーンべるとの業界資料で **製造元=スパイキー / 開発=エンターライズ / 総発売元=フィールズ** と役割分離できるため、数値競合ではなく `ROLE_DEFINITION_DIFFERENCE` として保持。
- 真・ギリシアバトルの朝一表示: HAZUSEは「1回目のCZが真・ギリシアバトルになりやすい」と要約する一方、パチマガスロマガ/ちょんぼりすたは設定変更時の内部真ギリシア相当では通常の告知が発生せず青7恩恵として出る場合があると説明。実質恩恵と液晶表示を分離して保持し、平均化しない。

## missingFields
- 設定変更専用の全モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の真・ギリシア相当選択率を「設定変更専用テーブル」として直接示す公開値: UNVERIFIED_AFTER_RESEARCH（有利区間開始時20.3%は別定義で保持）。

## sources
取得日: 2026-09-11

### identity / industry
- HAZUSE: https://hazuse.com/machine/pachislot/0S0442/
- グリーンべると「パチスロ『リンかけ』シリーズ最新作、発売決定」: https://web-greenbelt.jp/post-39937/

### core
- HAZUSE基本: https://hazuse.com/machine/pachislot/0S0442/
- HAZUSE AT: https://hazuse.com/machine/pachislot/0S0442/genre/209/
- イチカツ: https://ichikatsu.com/rinkake1/
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/15/at01.php
- pacnk: https://pacnk.com/slot/tools/sh_ringunikakeroichiwarudochampionkanibaruhen.html
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/117258/

### reset / morning
- HAZUSE 天井・設定変更: https://hazuse.com/machine/pachislot/0S0442/
- パチマガスロマガ 真ギリシアバトル: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/15/tj11-1.php
- 1geki 通常時/真ギリシア: https://1geki.jp/slot/s_rinkake1/42/
- ちょんぼりすた 朝一/有利区間ランプ: https://chonborista.com/slot/enta-slot/117258/
- すろぱちくえすと 天井/リセット判別: https://www.slopachi-quest.com/article/rinkake-world-tenjou/
- パチスロメソッド 周期による据え置き推測: https://slotmethod.jp/archives/9936/

status: COMPLETE_CORE_AND_RESET_V07
