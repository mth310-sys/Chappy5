machineName: プリシラと魔法の本
manufacturer: NET / ネット株式会社
releaseDate: 2016-10-17
recordNumber: 1018
generation: 5号機 / 5.5号機期
systemType: A+ART / 純ボーナス+疑似ボーナスART / 周期抽選型
formalModelName: プリシラと魔法の本／NB
certificationNumber: 6S0688
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NET公式プレスリリースで2016年10月中旬全国導入予定、導入前夜祭リリースで2016-10-17から全国導入を確認。
- HAZUSEで導入開始日2016-10-17、メーカー「ネット」、型式名 `プリシラと魔法の本／NB`、検定番号 `6S0688` を確認。
- K-Naviでもホール導入開始2016-10-17を確認。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.6% |
| 3 | 100.0% |
| 4 | 103.4% |
| 5 | 106.5% |
| 6 | 110.1% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
- クロノボーナスは全設定共通 1/252。
- プリシラBIG / プリシラREG / 合成初当たりは以下。
| 設定 | プリシラBIG | プリシラREG | 合成初当たり |
|---:|---:|---:|---:|
| 1 | 1/443 | 1/672 | 1/129 |
| 2 | 1/424 | 1/643 | 1/126 |
| 3 | 1/397 | 1/602 | 1/122 |
| 4 | 1/348 | 1/527 | 1/114 |
| 5 | 1/306 | 1/464 | 1/106 |
| 6 | 1/263 | 1/399 | 1/97 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33.6G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART部分の純増: 約1.8枚/G。
- リアルボーナス込みの疑似ボーナス消化時実効純増表記: 約2.0枚/G。
- P-WORLD等の「1G 2.0枚純増」は疑似ボーナス中のボーナス込み実効値として扱い、基礎ART純増1.8枚/Gと定義を分ける。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- クロノボーナス（純ボーナス）: 純増102枚。
- プリシラBIG（疑似ボーナスART）: 平均約120枚。
- プリシラREG（疑似ボーナスART）: 平均約90枚。
- BIGは準備時間+後半バトル、REGは準備時間+後半ミッションで構成され、固定G数型ではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は時計役物と連動する周期抽選「魔時（タイム）リンクシステム」。
- ショート周期: 約12G、ミドル周期: 約36G、ロング周期: 約144G。
- 通常天井はロング周期最大6周期。公称換算は約864〜870Gだが、クロノボーナス等で時計進行がずれるため実データカウンタ上では約900〜1000G付近になる場合がある。
- 天井はプリシラボーナス間で管理され、クロノボーナスではリセットされない。
- 最大6周期到達でプリシラボーナス確定。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は天井周期進捗をRESET。
- RT状態は通常状態へRESET。
- 筐体の時計表示はランダムスタート。液晶ステージは当時実戦上「街」開始。
- 設定変更時は天井周期振り分けが専用化され、通常最大6周期から最大5周期へ短縮。
- ロング周期のクリアポイントも設定変更専用に優遇され、通常最大40ptに対して最大30ptとなる。
- このクリアポイント優遇が初回ロング周期のみか、プリシラボーナス当選まで継続するかは当時資料でも未確定のため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は天井ゲーム数/周期進捗をCARRYOVER。
- RT状態もCARRYOVER。
- 筐体の時計は据え置きでもランダムスタートするため、見た目の時計位置は変更判別に使えない。
- 据え置き時の液晶開始ステージは当時資料で調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONでは天井進捗をCARRYOVER。
- RT状態もCARRYOVER。
- 時計役物はランダムスタート。
- 純電断時の液晶開始ステージは `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更とは天井短縮・RT状態で明確に挙動が異なる。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER。
- 純電源OFF→ON: CARRYOVER。
- 通常最大天井: ロング周期6回（理論約864G、HAZUSE約870G表記、実カウンタ上約900〜1000G付近になり得る）。
- 設定変更後最大天井: ロング周期5回。

### ceilingAfterReset
- 設定変更専用天井周期振り分け: 2周期6.25%、3周期10.16%、4周期18.75%、5周期64.84%。1周期/6周期は選択なし。
- 最大天井が6周期→5周期に短縮される。
- 通常時より浅い周期が選ばれるため、朝一リセット恩恵として有意。

### modeAfterReset
- 固定的なA/B/C等の通常モードというより、周期ごとの規定クリアポイントと天井周期抽選が主要な朝一差分。
- 設定変更時は専用の天井周期テーブルとロング周期クリアポイントテーブルを使用。
- 据え置き/純電源OFF→ONでは天井周期進捗を引き継ぐ。

### stateAfterReset
- RT状態: 設定変更で通常状態へRESET、据え置き/純電源OFF→ONでCARRYOVER。
- 細分化された内部高確等の全状態移行はミッションv0.7上の収集対象外で、設定変更時専用の追加初期振り分けは NONE_CONFIRMED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 最大天井が6周期から5周期へ短縮。
- 設定変更後は2〜5周期に天井が振り分けられ、浅い天井が通常より選択されやすい。
- 初回ロング周期の規定クリアポイントが通常最大40ptから最大30ptへ優遇される。
- 朝一1周期目（約144G+α）は当時攻略上のリセット狙い候補とされた。

### resetPenalties
- 設定変更で前日の天井進捗を失う。
- 前日RT状態を保持していた場合も通常状態へ戻る。
- それ以外の設定変更固有の主要不利は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更・据え置きとも時計役物がランダムスタートするため時計位置では判別不可。
- 当時解析では朝一リールガックンによる設定変更判別は不可。
- 設定変更時の液晶「街」開始は実戦上の報告であり、純電断/据え置きとの確定識別契約ではない。
- よって `GACKUN_NOT_USEFUL_AND_CLOCK_RANDOM`。

### numericResetData
設定変更時 天井周期振り分け（全設定共通）:
| 天井周期 | 振り分け |
|---:|---:|
| 1周期 | - |
| 2周期 | 6.25% |
| 3周期 | 10.16% |
| 4周期 | 18.75% |
| 5周期 | 64.84% |
| 6周期 | - |

設定変更時 ロング周期クリアポイント（物差し用要約）:
- 最大30pt。通常時は最大40pt。
- 平均クリアポイント: 設定1 28.6pt / 設定2 28.4pt / 設定3 28.1pt / 設定4 27.5pt / 設定5 26.9pt / 設定6 26.0pt。
- 高設定ほど浅いクリアポイントが選択されやすい。
- 全細目テーブルは完全再現用詳細に寄り過ぎるため、v0.7では最大値・平均値と朝一差分のみ保持。

## dataQualityNotes
- 導入日・型式・検定番号はNET公式プレスリリース、HAZUSE、K-Naviで高一致。
- 機械割・プリシラBIG/REG・クロノボーナス・合成初当たり・ベースはHAZUSE、すろぱちくえすと、ピロ式で概ね一致。
- ART純増は基礎約1.8枚/G、ボーナス込み約2.0枚/G。P-WORLDの2.0枚/Gは疑似ボーナス消化時の実効表記とみなし、異なる定義を混ぜない。
- 天井の約864G/約870G/実質900〜1000Gは定義差（理論周期換算・丸め・実カウンタ到達）として分離。

## conflicts
- `CONFLICT_SETTING1_PRISCILLA_REG_1_672_VS_1_682`: HAZUSE・期待値見える化・ピロ式は設定1 REG 1/672、すろぱちくえすとの機種まとめ本文の一箇所のみ1/682。複数一致の1/672をcanonicalとし、1/682は転記/表記競合として保持。
- ART純増1.8枚/G vs 2.0枚/Gは原則CONFLICT扱いせず、基礎ART純増とボーナス込み実効純増の定義差として保持。

## missingFields
- 設定変更時ロング周期クリアポイント優遇の継続範囲（初回周期のみか疑似ボーナスまでか）: UNVERIFIED_AFTER_RESEARCH
- 据え置き/純電断時の液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH
- メーカー保証の変更確定判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. NET株式会社公式プレスリリース — 「プリシラと魔法の本」発売決定（2016-08-17）
   - https://www.dreamnews.jp/press/0000137366
2. NET株式会社公式プレスリリース — 導入直前12時間生放送（2016-10-06、10月17日より全国導入予定を明記）
   - https://www.dreamnews.jp/press/0000140322
3. HAZUSE — プリシラと魔法の本（型式・検定番号・導入日・性能）
   - https://hazuse.com/machine/pachislot/6S0688/
   - https://hazuse.com/machine/pachislot/6S0688/genre/201/
4. HAZUSE — 天井 / 設定変更時天井周期振り分け
   - https://hazuse.com/machine/pachislot/6S0688/genre/207/
5. HAZUSE — ART / 周期抽選
   - https://hazuse.com/machine/pachislot/6S0688/genre/209/
6. K-Navi — プリシラと魔法の本
   - https://p-kn.com/slot/2612/
7. グリーンべると — 3つの周期が入り乱れる「魔時リンクシステム」（2016-09-07）
   - https://web-greenbelt.jp/00008920/
8. すろぱちくえすと — プリシラと魔法の本 機種まとめ
   - https://www.slopachi-quest.com/kisyubetsu/purisira/
9. すろぱちくえすと — 朝一設定変更・リセット時の恩恵・挙動・狙い目
   - https://www.slopachi-quest.com/article/purisira-reset/
10. 期待値見える化 — 天井・周期・朝一リセット解析
   - https://slotjin.com/zone/priscilla/
11. ピロ式パチスロ記 — プリシラと魔法の本 天井・解析情報
   - https://piro-shiki.com/purishira-kaiseki/
12. P-WORLD — プリシラと魔法の本
   - https://www.p-world.co.jp/machine/database/8110
