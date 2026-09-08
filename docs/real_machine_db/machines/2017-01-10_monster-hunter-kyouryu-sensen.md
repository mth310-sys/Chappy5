machineName: パチスロ モンスターハンター～狂竜戦線～
manufacturer: エンターライズ
releaseDate: 2017-01-10
recordNumber: 1037
generation: 5号機 / 5.5号機期
systemType: A+ART / クエストボーナス+ART / モード・スルーテーブル管理
formalModelName: モンスターハンター狂竜戦線／ZS
certificationNumber: 6S1097
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- エンターライズ製「パチスロ モンスターハンター～狂竜戦線～」。HAZUSEで型式名「モンスターハンター狂竜戦線／ZS」、検定番号「6S1097」を確認。
- HAZUSE・ちょんぼりすた等は全国導入の基準日を2017-01-10とする。K-Naviは2017-01-09、複数当時資料は関西等の先行導入を2016-12-19とするため、平均せず日付定義差をCONFLICTとして保持する。
- エンターライズ公式特設サイトは2016-12-19に製品特徴、2017-01-10にスペシャルを更新しており、機種の当時公式存在を確認できるが、全国稼働開始日の直接明記は確認できなかった。
reliability: CONFLICT_RELEASE_DATE / OFFICIAL_IDENTITY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.6% |
| 3 | 100.6% |
| 4 | 103.8% |
| 5 | 107.6% |
| 6 | 112.2% |

- ちょんぼりすた、後年シリーズ整理資料で同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### クエストボーナス
- 設定1〜5: 約1/140。
- 設定6: 約1/129。
- ボーナスはARTへのメイン契機。

### ART「狩猟戦線」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/443.8 |
| 2 | 1/404.4 |
| 3 | 1/403.7 |
| 4 | 1/320.5 |
| 5 | 1/319.3 |
| 6 | 1/203.8 |

- HAZUSE・一撃・ちょんぼりすたで同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約32〜34G / 50枚。
- HAZUSEは約33〜32G、ちょんぼりすたは約34G。算出条件/丸め差の可能性があるため単一値へ平均せずレンジ保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_RANGE

## netIncrease
- ART「狩猟戦線」: 約2.0枚/G。
- 初期ストックパート: 20〜100G。
- エンターライズ関連のメーカー発表転載、HAZUSE、一撃で一致。
reliability: OFFICIAL_CONTEXT_PLUS_ANALYSIS_HIGH

## basicPayout
- クエストボーナス: 約40枚。
- ART「狩猟戦線」: ストックパート20〜100G + 討伐パート + 報酬パートで構成。討伐成功で次セット側の報酬を獲得する継続構造。
- 完全再現用の狩珠色別・モンスター別詳細抽選は収集対象外。
reliability: OFFICIAL_CONTEXT_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はA/B/C/Dの内部モードが存在し、ボーナス成立時のART当選率に影響する。
- モードは5種類のスルーテーブルで管理され、ART非当選ボーナス後に進行する。
- ゲーム数天井: ボーナス及びART間777GでART当選。
- スルー系: ボーナス10回連続ART非当選後からART当選が優遇され、当時解析では12スルー後の次回ボーナスでART確定とする整理もある。一撃は「10回連続非当選後、11回目から優遇」と記載。詳細な全通常テーブルは物差し用途を超えるため未収集。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時: ゲーム数天井RESET。
- スルー回数天井/モードテーブルRESELECT。
- 内部状態RESELECT。
- 液晶開始ステージはバルバレ。
- ART中に設定変更された場合はART状態RESET。
- ボーナス中に設定変更された場合もボーナス状態RESET。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE

### carryOverBehavior
- 据え置きは設定変更を行わないため、前日のゲーム数天井進捗、スルー/モード進捗、内部状態を継続する攻略契約として扱う。
- 純電源OFF→ONについては一撃の直接比較表で、ゲーム数天井・モード・内部状態の引継ぎを確認。
reliability: ANALYSIS_HIGH_DIRECT_FOR_POWER_CYCLE_PLUS_CARRYOVER_CONTEXT

### powerCycleBehavior
- 純電源OFF→ON: ゲーム数天井CARRYOVER。
- モード/スルー進捗CARRYOVER。
- 内部状態CARRYOVER。
- 液晶開始ステージはバルバレ。
- ART中の電断復帰時は告知タイプが「インパクト告知」になる。
- ボーナス中の電断復帰時は「捜索クエスト」になる。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- 設定変更: ボーナス及びART間777Gの内部ゲーム数をRESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- ART非当選ボーナスのスルー進捗は設定変更でリセット/テーブル再抽選、電断では引継ぎ。
reliability: ANALYSIS_HIGH_DIRECT

### ceilingAfterReset
- 設定変更時は777G天井の前日進捗を失い0G側から再スタート。
- 設定変更専用の固定短縮ゲーム数天井は、表記揺れ・「リセット/朝一/天井短縮/設定変更」等で再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一のスルーテーブル再抽選は存在するが、固定短縮天井とは分離する。
reliability: ANALYSIS_HIGH_DIRECT_PLUS_RESEARCH

### modeAfterReset
設定変更時のスルーテーブル振り分け:
| テーブル | 設定1〜3 | 設定4〜6 |
|---|---:|---:|
| 1 | 46.9% | 36.7% |
| 2 | 25.0% | 25.0% |
| 3 | 14.8% | 14.8% |
| 4 | 3.1% | 3.1% |
| 5 | 10.2% | 20.3% |

- 高設定ほど設定変更時テーブル5選択率が高い。
- 初回モードは選択テーブルに依存し、テーブル1=B、2=B、3=C、4=A、5=D。
- 純電源OFF→ONは前日モード/テーブルを引き継ぐ。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### stateAfterReset
設定変更時内部状態:
| 設定 | 通常 | 高確 | 超高確 | 確定高確 |
|---:|---:|---:|---:|---:|
| 1〜3 | 75.00% | 23.83% | 0.78% | 0.39% |
| 4〜6 | 66.80% | 30.86% | 1.56% | 0.78% |

- 高確以上合計: 設定1〜3 = 25.00%、設定4〜6 = 33.20%（公開値の単純合算）。
- 純電源OFF→ONでは内部状態CARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時に内部状態を再抽選し、高確以上スタート率は設定1〜3で25.00%、設定4〜6で33.20%。
- 設定4〜6はテーブル5選択率20.3%で、設定1〜3の10.2%より優遇。
- ただし設定変更そのものによる固定短縮777G天井は確認できない。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### resetPenalties
- 前日の777G天井進捗、スルー/テーブル進捗、内部状態は設定変更で失われる。
- 前日が有利なモード/高確状態でも保持されない。
reliability: ANALYSIS_HIGH_DIRECT

### resetDetection
- 設定変更・純電源OFF→ONとも液晶開始ステージがバルバレのため、朝一ステージ単独では設定変更判別不可。
- 本機固有の実用的なガックン判別、初期出目、ランプ等について「モンハン/モンスターハンター 狂竜戦線」「設定変更/リセット/朝一/ガックン/据え置き」を組み替えて再探索したが、確定契約を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ART中/ボーナス中の電断復帰時の告知タイプ変化は「純電断時」の挙動であり、通常朝一の設定変更確定材料としては扱わない。
reliability: ANALYSIS_HIGH_FOR_STAGE_PLUS_UNVERIFIED_DETECTION_RESEARCH

### numericResetData
- 設定変更時テーブル1〜5: 設定1〜3 = 46.9 / 25.0 / 14.8 / 3.1 / 10.2%。
- 設定変更時テーブル1〜5: 設定4〜6 = 36.7 / 25.0 / 14.8 / 3.1 / 20.3%。
- 設定変更時状態 通常/高確/超高確/確定高確: 設定1〜3 = 75.00 / 23.83 / 0.78 / 0.39%。
- 設定変更時状態 通常/高確/超高確/確定高確: 設定4〜6 = 66.80 / 30.86 / 1.56 / 0.78%。
- 高確以上合計: 25.00% / 33.20%。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 2016-12-19は関西等の最速/先行導入、K-Naviは2017-01-09、HAZUSE・複数解析は2017-01-10。全国本線のcanonicalは2017-01-10とし、先行導入を早取りしない。
- 50枚ベースは約32〜34Gで資料差があるため平均化せずレンジ保持。
- スルー天井の表現は「10回連続非当選後から11回目以降優遇」と「12スルー後次回確定」の資料があり、同一概念の段階差として両方を注記。完全再現用の全テーブル詳細は収集しない。
- resetBehaviorは一撃の設定変更/電源OFF ON直接比較表、ちょんぼりすたの朝一表・テーブル振り分け、一撃の状態/モード資料を相互照合。

## conflicts
- `CONFLICT_RELEASE_DATE_2016_12_19_EARLY_VS_2017_01_09_VS_2017_01_10`
  - 2016-12-19: 関西等の最速/先行導入資料。
  - 2017-01-09: K-Navi「ホール導入開始」。
  - 2017-01-10: HAZUSE・ちょんぼりすた等の導入開始日。
  - canonical: 2017-01-10。地域先行を全国時系列本線へ早取りしない。

## missingFields
- 設定変更専用の固定短縮777G天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の確定的なガックン/初期出目/ランプによる設定変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- メーカー公式による全国ホール導入日の直接明記: `UNVERIFIED_AFTER_RESEARCH`。公式特設サイト当時更新履歴は確認済み。

## sources
retrievedAt: 2026-09-09
- OFFICIAL — エンターライズ「モンスターハンター 狂竜戦線」特設サイト: https://www.enterrise.co.jp/slot/mhk/
- INDUSTRY/OFFICIAL_CONTEXT — 4Gamer（コムシード発表転載、A+ART・約40枚・純増約2.0枚/G・20〜100G）: https://www.4gamer.net/games/369/G036935/20170120081/
- ANALYSIS_HIGH — HAZUSE 機種トップ（型式/検定/導入/ART初当たり/ベース）: https://hazuse.com/machine/pachislot/6S1097/
- ANALYSIS_HIGH — HAZUSE ART: https://hazuse.com/machine/pachislot/6S1097/genre/209/
- ANALYSIS_HIGH — 一撃 天井/設定変更・電源OFF ON: https://1geki.jp/slot/s_monhan_k/3/
- ANALYSIS_HIGH — 一撃 通常時モード/テーブル: https://1geki.jp/slot/s_monhan_k/43/
- ANALYSIS_HIGH — 一撃 通常時状態: https://1geki.jp/slot/s_monhan_k/42/
- ANALYSIS_HIGH — 一撃 ART概要: https://1geki.jp/slot/s_monhan_k/81/
- ANALYSIS_HIGH — 一撃 ボーナス概要: https://1geki.jp/slot/s_monhan_k/61/
- ANALYSIS_HIGH — ちょんぼりすた 総合解析/朝一/スペック: https://chonborista.com/slot/enta-slot/26726/
- ANALYSIS_HIGH — K-Navi 機種ページ（2017-01-09表記）: https://p-kn.com/slot/2631/
- ANALYSIS_SINGLE — すろぱちくえすと モンハン狂竜戦線まとめ: https://www.slopachi-quest.com/kisyubetsu/monsterhunter3-kyouryu/
