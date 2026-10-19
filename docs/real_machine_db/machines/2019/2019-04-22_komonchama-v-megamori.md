# パチスロ黄門ちゃまV 女神盛-MEGAMORI-

recordNo: 1281
machineName: パチスロ黄門ちゃまV 女神盛-MEGAMORI-
manufacturer: オリンピア
brand: 平和
formalModel: Sパチスロ黄門ちゃまV女神VER／LA6
certificationNumber: 8S1228
releaseDate: 2019-04-22
generation: 6号機
systemType: AT / 純増約3.5枚/G / 4段階設定

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.1% |
| 5 | 105.9% |
| 6 | 110.2% |

信頼度: HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT初当り |
|---|---:|
| 1 | 1/424.7 |
| 2 | 1/424.7 |
| 5 | 1/340.6 |
| 6 | 1/304.3 |

信頼度: HIGH_MULTI_SOURCE

## baseGamesPer50

- 約51〜53G/50枚

信頼度: HIGH_MULTI_SOURCE

## netIncrease

- AT「水戸ゴールデンゲート」: 約3.5枚/G
- AT初期ゲーム数: 女神盛ジャッジメントで決定、20G以上

信頼度: HIGH_MULTI_SOURCE

## basicPayout

- 擬似ボーナス固定枚数型ではなく、ゲーム数管理ATで出玉を獲得。
- AT初当り時は上乗せ特化ゾーン「女神盛ジャッジメント」から開始。
- 上位AT「テンプテーションゲーム」は1セット20G、実質継続率80%以上。

## modeSpecificMinimumData

- 6号機AT機。
- 通常時は「310WカウンターEX」のお銀箱/女神箱ポイントを軸にCZ・ATを目指す。
- CZ「ガチガチレバーゾーン」および上位版「+」を搭載。
- AT「水戸ゴールデンゲート」は純増約3.5枚/G。
- AT天井は333G / 555G / 777G / 999Gの振り分け。最大999GでAT当選。
- 有利区間移行時に「喝ゾーン」初回発動ゲーム数を抽選。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: CONFIRMED_MULTI_SOURCE_WITH_DISTINCT_CARRYOVER_GAP

- settingChangeBehavior: 設定変更時はAT天井ゲーム数をリセット。310WカウンターEXは見た目0（規定ポイントは再抽選）、310TVは見た目「春」（内部は再抽選）。液晶ステージは桜蘭の都または緑陰の竹林。HAZUSEでは有利区間ランプ非点灯を確認。
- carryOverBehavior: 「設定を変更せず据え置いた場合」だけを、電源OFF→ON有無から完全分離した本機固有資料は固定できず `PARTIAL_CONFIRMED_BY_POWER_CYCLE_BEHAVIOR`。純電源OFF→ON時の各内部値引継ぎは別項目で直接確認済み。
- powerCycleBehavior: 純電源OFF→ONでは天井までのゲーム数を引き継ぐ。310WカウンターEXは見た目0に戻るが内部値を引き継ぎ、310TVは見た目「春」に戻るが内部状態を引き継ぐ。有利区間ランプも引き継ぐ。CZ/AT中ならステージも状態を引き継ぐとHAZUSEが明記。
- gameCounterReset: 設定変更で天井ゲーム数をリセット。電源OFF→ONでは引き継ぎ。
- ceilingAfterReset: 設定変更後も333/555/777/999Gの通常天井振り分けで再抽選される。固定の「リセット専用短縮天井」ではない。
- modeAfterReset: 設定変更時、310TV内部状態を再抽選。310WカウンターEXの規定ポイントも再抽選。有利区間移行時に喝ゾーン初回発動G数を抽選。
- stateAfterReset: 設定変更時は液晶ステージが桜蘭の都 or 緑陰の竹林。有利区間ランプ非点灯。純電断では内部カウンター/310TV/天井進捗を引き継ぐ。
- advantageousSectionReset: 設定変更時は有利区間ランプ非点灯＝有利区間リセットを確認。純電源OFF→ON時はランプ状態を引き継ぐ。
- resetBenefits: 高設定ほど333G/555G天井選択率が高いが、これは設定別の通常天井振り分けであり「リセット専用恩恵」とは扱わない。設定変更専用の固定短縮天井・初当り優遇は確認できず `NONE_CONFIRMED_AS_RESET_ONLY_BENEFIT`。
- resetPenalties: 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 朝一の有利区間ランプが点灯なら設定変更ではない方向の強い材料。設定変更時はランプ非点灯。ただし消灯だけで設定変更確定とはせず、前日終了状態等との混同可能性を排除しない。310カウンター/310TVは設定変更でも純電断でも見た目が初期化されるため、見た目だけでは単独判別不可。ガックンの本機固有確定発生率は固定できず。
- numericResetData: 設定変更後に再抽選される天井振り分けは、設定1・2=333G 3.1% / 555G 12.1% / 777G 1.6% / 999G 83.2%、設定5=20.3% / 30.1% / 1.6% / 48.0%、設定6=28.1% / 30.1% / 1.6% / 40.2%。有利区間移行時の初回喝ゾーンは、設定1・2・5=33G 15.6% / 111G 10.2% / 222G 10.2% / 333G 32.8% / 444G 12.5% / 555G 18.8%、設定6=15.6% / 15.6% / 25.0% / 27.3% / 10.2% / 6.3%。

### resetBehavior 再探索メモ

「黄門ちゃまV女神盛 / 女神盛-MEGAMORI- / Sパチスロ黄門ちゃまV女神VER／LA6 / オリンピア / 平和」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / 310Wカウンター / 310TV / モード / ガックン / 有利区間ランプ」を組み合わせ、当時解析・業界記事・機種DB・導入資料を横断。HAZUSEと一撃で設定変更/純電断の天井・カウンター・310TV挙動を相互照合。HAZUSEで有利区間ランプとCZ/AT中の電断引継ぎまで補強した。据え置き単独条件は純電断と同一視せず部分確認扱いとした。

## qualityNotes / conflicts

- 導入日はK-Navi・HAZUSE・複数2019年導入カレンダーで `2019-04-22` が一致。グリーンべるとは4月21日から納品予定としており矛盾しない。
- 一部解析に `2019-04-20` 表記があるが、全国一斉導入日を明示するK-Navi、HAZUSE、複数導入一覧が4/22で一致するためcanonicalは `2019-04-22`。日付差は納品/先行設置系の可能性として平均しない。
- 一撃の古いページでは電源OFF→ON時の天井G数が「調査中」だが、後更新のHAZUSEは「引き継ぐ」と明記。後発かつ詳細表のあるHAZUSEを採用し、古い未確定表記をCONFLICTとは扱わない。

## sources

取得日: 2026-09-11

1. グリーンべると — 家康当選率50％！『黄門ちゃま』が6号機で登場
   - https://web-greenbelt.jp/00011098/
   - 2019-02-20発表会、オリンピア製、純増3.5枚/G、AT初当り1/424.7〜1/304.3、ベース51〜53G、4/21納品予定
   - reliability: INDUSTRY_CONTEMPORARY
2. HAZUSE — 黄門ちゃまV女神盛-MEGAMORI-
   - https://hazuse.com/machine/pachislot/8S1228/
   - 型式 `Sパチスロ黄門ちゃまV女神VER／LA6`、検定番号8S1228、導入2019-04-22、出玉率・純増
   - reliability: MACHINE_DATABASE_HIGH
3. HAZUSE — 天井・設定変更
   - https://hazuse.com/machine/pachislot/8S1228/genre/207/
   - 天井振り分け、設定変更/電源ON-OFF時の天井・310Wカウンター・有利区間ランプ・ステージ
   - reliability: CONTEMPORARY_ANALYSIS_HIGH
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_megamori/3/
   - 天井、設定変更時の310カウンターEX/310TV再抽選、純電断時の内部引継ぎ
   - reliability: CONTEMPORARY_ANALYSIS
5. パチマガスロマガ — AT初当り確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/h.php
   - 設定別AT初当り、PAYOUT
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役確率/50枚ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/c-1.php
   - 約51〜53G/50枚
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — AT「水戸ゴールデンゲート」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/05-1.php
   - 純増3.5枚/G、初期20G以上
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — 喝ゾーン
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/10-2.php
   - 有利区間移行時の初回喝ゾーンG数振り分け
   - reliability: ANALYSIS_HIGH
9. K-Navi — 2019年4月新台導入カレンダー
   - https://p-kn.com/calendar/201904/
   - 4/22全国一斉導入としてSLOTギャラガ、プレミアムハナハナ-30、黄門ちゃまV女神盛の3機を掲載
   - reliability: CONTEMPORARY_CALENDAR
10. パチスロ立ち回り講座 — 新台導入予定日
   - https://crankyseven.com/newmachine-info.htm
   - 2019-04-22の3機を独立照合
   - reliability: HISTORICAL_CALENDAR

coreStatus: COMPLETE_CORE
