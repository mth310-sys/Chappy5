# 戦国乙女～剣戟に舞う白き剣聖～西国参戦編

machineName: 戦国乙女～剣戟に舞う白き剣聖～西国参戦編
formalModelName: 戦国乙女剣戟に舞う白き剣聖西国参戦編L2
inspectionNumber: 4S0175
manufacturer: オリンピア
releaseDate: 2014-06-02
releaseDatePrecision: exact_start
generation: 5号機
systemType: ART特化 / 周期抽選 + CZ + 直撃ART
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- ホール導入開始 **2014-06-02**。K-Navi、HAZUSE、当時解析整理で一致。
- HAZUSEで型式名 **戦国乙女剣戟に舞う白き剣聖西国参戦編L2**、検定番号 **4S0175**、メーカー **オリンピア** を確認。
- 前作「戦国乙女～剣戟に舞う白き剣聖～」や後年の「戦国乙女2 深淵に輝く気高き将星」「戦国乙女4」等とは別機種として分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.5% |
| 2 | 98.1% |
| 3 | 100.6% |
| 4 | 103.9% |
| 5 | 107.2% |
| 6 | 113.4% |

- K-Navi、パチスロ立ち回り講座で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「強カワRUSH」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/255.9（詳細値 1/255.87） |
| 2 | 1/242.7（1/242.65） |
| 3 | 1/230.1（1/230.12） |
| 4 | 1/209.3（1/209.25） |
| 5 | 1/187.5（1/187.53） |
| 6 | 1/162.8（1/162.81） |

- K-Navi、HAZUSE、パチスロ立ち回り講座で一致。詳細値はK-Navi自社調べ。
- 初当たり平均獲得枚数のK-Navi実測/算出値: 設定1 **375.16枚**、2 **374.99枚**、3 **375.47枚**、4 **380.64枚**、5 **381.04枚**、6 **408.75枚**。比較用補助値として保持し、基本獲得枚数とは区別する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G / 50枚（1000円）**。
- パチスロ立ち回り講座に約31G、K-Navi導入直後実戦記事でも「1Kあたり約31G」と報告。
- 後者は実戦観測を含むため、メーカー公表値とは扱わない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART「強カワRUSH」: **約2.0枚/G**。
- K-Navi、パチマガスロマガ、パチスロ立ち回り講座で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART初当たり時は「西国参戦モード」4Gで初期ゲーム数を決定。K-Naviでは **最低45G～**。
- ARTセット継続時は **40Gスタート**とする解析あり。
- 乙女ボーナス（赤7/白7、ART中のみ）: **約60枚**、ベルナビ10回。
- プレミアムボーナス「出陣の刻」: **9G、約63枚**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は「乙女くじ」による周期抽選が主要経路。液晶カウンター初期値は100、毎ゲーム減算し、0到達でART/CZ抽選。
- 通常時の1周期平均は **約49G**（K-Navi）。
- 自力CZ「乙女アタック」は16G完走型。周期到達後などから抽選され、ART当選期待度は50%超とされる。
- ARTへは規定ゲーム数解除を主経路とせず、周期抽選・レア役直撃・CZ等から突入。
- 完全再現用の全周期抽選率・全小役別抽選は本DB対象外。

## ceiling

### ゲーム数天井

- **ART間1059G**到達で **白7乙女ボーナス + ART** 確定。

### 周期天井

- 乙女くじ **20周期目**到達で **プレミアム乙女アタック** 確定。

- HAZUSE、パチスロ立ち回り講座、後年回顧資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **ART間1059G天井までのゲーム数をリセット**。
- **周期回数もリセット**。
- 初回の「乙女くじ」残り周期ゲーム数は **10～100Gで再抽選**。
- 液晶表示上の周期カウンターは電源OFF→ONでも100へ戻るため、表示だけでは設定変更判別不可。
- confidence: ANALYSIS_HIGH / PERIOD_ANALYSIS_MULTI_SOURCE

### carryOverBehavior

- 据え置き時の周期内部残りゲーム数は、電源OFF→ONを挟んでも **内部的には引き継ぐ**という当時解析を確認。
- ART間1059G天井についても、K-Naviの後年実戦記事では「前日155G + 当日650Gなら据え置きで約800G」と宵越し計算しており、据え置き天井進捗のCARRYOVERを支持する観測がある。
- ただしメーカー直接契約ではないため、ART間天井の据え置き引継ぎは **PERIOD_OBSERVATIONAL_SUPPORT** として保持。
- 周期回数そのものの据え置き時完全契約は、直接一次資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONで、乙女くじは **表示上100に戻るが、内部の残り周期ゲーム数は引き継ぐ**。
- 液晶背景は設定変更の有無にかかわらず、朝一に尾張・駿河・信濃のいずれかとなる解析あり。
- ART間1059G天井カウンタの純電断時保持を明記した安全な直接資料は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。据え置き宵越し観測と純電断契約を同一視しない。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE for cycle internal carryover

### gameCounterReset

- 設定変更: **RESET**（ART間1059G、周期回数）。
- 据え置き: ART間Gは **CARRYOVER_SUPPORTED_BY_PERIOD_OBSERVATION**、周期内部残りGは **CARRYOVER**。
- 電源OFF→ONのみ: 周期内部残りGは **CARRYOVER**、液晶表示は100へ再表示。ART間1059Gの直接契約は **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: ART間1059G / 20周期。
- 設定変更後に1059Gより短い専用ゲーム数天井へ短縮される情報は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし初回周期残りGは **10～100Gで再抽選**されるため、朝一周期到達位置は通常表示と一致しない場合がある。

### modeAfterReset

- 本機は天国A/B等のゲーム数解除モードを主要構造としない。
- 設定変更専用の長期モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 周期残りG再抽選（10～100G）はモードではなく周期カウンタ再セットとして別管理。

### stateAfterReset

- 通常時の高確/低確等について、設定変更・据え置き・純電断の本機固有保持/再抽選契約を、安全な直接資料として固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時、初回周期残りGを **10～100G**で再抽選。
- 新台初日311件の実践集計では、リセット後 **1～50Gの初当たり23件 / 311件 = 7.4%**。51～100Gはやや当選率が高い傾向と報告。
- これは実践値であり、メーカー公表の当選率ではない。積極的な朝一恩恵確定値とは扱わない。

### resetPenalties

- 設定変更時固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 液晶の乙女くじカウンターは、設定変更でも単純電源OFF→ONでも表示上100へ戻るため、**表示値だけでは判別不可**。
- ただし前日閉店時の内部残り周期を把握し、翌朝の最低減算量と実際の周期到達位置を比較することで、条件次第では設定変更確定となるケースがあるという当時解析あり。
- 例示ロジック: 前日残り40G、翌日32G消化＋チャンス役2回でも0到達しない場合など、前日内部残りを引き継いだ場合に成立しない挙動なら変更を支持。
- ガックンによる本機固有の確定判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

### numericResetData

- 設定変更後初回周期残りG: **10～100G再抽選**。
- 新台初日1回目初当たり311件集計: **1～50G 23件 = 7.4%**。
- 51～100Gは「若干期待度高め」とする実践観測。具体率は安全な公開値を固定できず **UNVERIFIED**。

### publicMorningNumbers

- **10～100G**: 設定変更後の初回周期残りG再抽選範囲。
- **7.4%（23/311）**: リセット想定新台初日サンプルの1～50G初当たり実践率。
- メーカー公表値ではなく **PERIOD_OBSERVATIONAL**。

## resetBehavior 再探索メモ

- `戦国乙女 西国 / 戦国乙女2西国 / 戦国乙女～剣戟に舞う白き剣聖～西国参戦編 / 戦国乙女剣戟に舞う白き剣聖西国参戦編L2 / 4S0175 / オリンピア` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 周期 / 乙女くじ / ガックン / 50枚 / 1000円` を組み合わせて再探索。
- K-Navi、HAZUSE、パチマガスロマガ、パチスロ立ち回り講座、2014年当時の期待値見える化、後年回顧資料を横断。
- 「戦国乙女2 深淵に輝く気高き将星」やスマスロ「戦国乙女4」のリセット値は混入させない。
- 純電断時のART間1059G、通常内部状態、周期回数の完全保持契約は十分な再探索後も直接固定できないため推測しない。

## conflicts / safeguards

- ART初当たりは丸め値（1/255.9等）と詳細値（1/255.87等）が一致するためCONFLICTではなく精度差。
- baseGamesPer50約31Gは複数解析/実戦系資料で整合するがメーカー一次値ではない。
- 前作・後継機の「戦国乙女」各機種は、名称が近いためresetBehaviorを流用しない。
- 設定推測用の40/60ポイント減算は高設定示唆であり、設定変更/据え置き判別とは別物なのでresetDetectionへ混入しない。

## sources

取得日: **2026-09-07**

1. K-Navi — 戦国乙女～剣戟に舞う白き剣聖～西国参戦編（導入日、ART初当たり、機械割、純増、周期、各解析）
   - https://p-kn.com/slot/2059/
2. K-Navi — ART初当り確率＆ART中ボーナス確率（詳細初当たり、平均獲得枚数）
   - https://p-kn.com/slot/2059/49606/
3. K-Navi — ボーナス＆ART確率（乙女ボーナス約60枚、出陣の刻63枚）
   - https://p-kn.com/slot/2059/49508/
4. K-Navi — 強カワRUSH（純増約2.0枚/G、最低45G～）
   - https://p-kn.com/slot/2059/49500/
5. HAZUSE — 戦国乙女 西国参戦編（型式L2、検定4S0175、導入日、ART初当たり、天井）
   - https://hazuse.com/machine/pachislot/4S0175/
6. パチマガスロマガ — 基本仕様（2014年6月、ART純増約2.0枚/G、疑似ボーナス約60枚）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/115/a.php
7. パチスロ立ち回り講座 — 解析まとめ（約31G/1000円、機械割、初当たり、1059G/20周期天井、設定変更で天井Gクリア）
   - https://crankyseven.com/sengokuotome-saigoku-pc.htm
8. 期待値見える化 — 2014-06-10朝一リセット解析（天井/周期回数リセット、初回周期10～100G、電断時表示100・内部周期引継ぎ、311件実践値）
   - https://slotjin.com/slot/sengokuotome2-morning/
9. パチ7 — 5号機回顧（1059G天井、20周期、初当たり等の後年照合）
   - https://pachiseven.jp/articles/detail/11187
10. ぱちんこドキュメント — 2014-06-02当時解析整理（導入日、ART仕様）
   - https://pachinkolist.com/archives/39159335.html

## missingFields

- powerCycleBehavior ART間1059G direct contract: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior cycle-count exact contract: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- gakkun reset detection: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES
