# スカイラブ（初代）

machineName: スカイラブ
formalModelName: スカイラブX
manufacturer: SNKプレイモア
releaseDate: 2007-02
generation: 5号機初期
systemType: ボーナス+完走型RT / CZループ

## payoutRateBySetting

パチマガインターネットの7000P×10万日シミュレート値:

- 設定1: 96.94%
- 設定2: 99.36%
- 設定3: 101.73%
- 設定4: 104.16%
- 設定5: 106.56%
- 設定6: 108.92%

pacnkには丸めたPAYOUT 96.0 / 99.0 / 101.0 / 104.0 / 106.0 / 108.0% が掲載される。定義・丸め精度が異なるため精密値はパチマガ側を主値とし、pacnk値は照合用として保持する。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

パチマガインターネット解析値（4種類のボーナス個別）:

| 設定 | 赤7BIG | 青7BIG | 赤7CT | 青7CT |
|---:|---:|---:|---:|---:|
| 1 | 1/516.031 | 1/992.970 | 1/992.970 | 1/949.797 |
| 2 | 1/492.752 | 1/936.229 | 1/936.229 | 1/873.813 |
| 3 | 1/471.482 | 1/885.622 | 1/885.622 | 1/809.086 |
| 4 | 1/451.972 | 1/840.205 | 1/840.205 | 1/753.287 |
| 5 | 1/434.013 | 1/799.220 | 1/799.220 | 1/704.688 |
| 6 | 1/417.427 | 1/762.047 | 1/762.047 | 1/661.980 |

pacnkのBIG合算/CB合算は以下で、上記個別解析値の合算と整合する範囲:

- BIG: 設定1 1/339.60 → 設定6 1/269.70
- CB/CT: 設定1 1/485.50 → 設定6 1/354.20

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ旧攻略資料の1000円あたりプレイ数（50枚等価換算の物差しとして保存）:

- 設定1: 33.28P
- 設定2: 33.64P
- 設定3: 34.00P
- 設定4: 34.38P
- 設定5: 34.76P
- 設定6: 35.15P

信頼度: ANALYSIS_HIGH

## netIncrease

RT「トレジャータイム」は30G+終了後のお宝チェック3Gを含む1セット33Gの完走型RT。
パチ7の後年回顧（当時解析担当ライター）では、RT純増は約0.2枚/G。

- RT: 33G完走型
- netIncrease: 約0.2枚/G

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ旧攻略・パチマガインターネット・P-WORLDを照合。

- BIG: 345枚超払い出し終了 / 純増約270枚
- CT: 142〜145枚超払い出し終了表記あり / 標準純増約104枚
- CTは技術介入で最大111枚獲得可能（中段チェリービタ押し手順）

P-WORLDの型式ページはBIG 345枚超、異色7ボーナス145枚超の終了条件を掲載。旧パチマガ基本システムはCT 142枚表記のため、規定払い出し終了条件の細部は資料差を `CONFLICT` として残す。実獲得の物差し値は約104枚、技術介入MAX111枚で一致。

信頼度: CONFLICT（規定払い出し条件のみ） / ANALYSIS_HIGH（実獲得目安）

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- ボーナス4種類（BIG×2、CT×2）
- ボーナス後はCZへ移行
- CZからベル等の条件で33G完走型RT「トレジャータイム」へ突入
- RT終了後に再度CZへ戻るループ性が特徴
- 天井機能は確認資料で非搭載

## resetBehavior

schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 後年整理資料slot-games.onlineに「設定変更時にはチャンスゾーンからスタート」とする初代固有記述を確認したため、設定変更後の開始状態=CZを `ANALYSIS_SINGLE` で固定。設定変更直前がRT/CZだった場合の残G・フラグ処理まで直接説明する資料は未固定のため推測しない。
- carryOverBehavior: 据え置き時のCZ/RT内部状態引継ぎについて、初代固有の直接契約を資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 電源OFF→ONのみのCZ/RT状態挙動を、据え置きと独立した初代固有契約として固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounterReset: 天井非搭載のため公開天井ゲーム数管理は `NOT_APPLICABLE`。
- ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。設定変更専用短縮天井なし。
- modeAfterReset: ゲーム数モードは確認されない。設定変更後はCZ開始とする資料を確認。
- stateAfterReset: 設定変更後=CZ開始を `ANALYSIS_SINGLE` で確認。CZ中はベル成立等から33G完走型RTへ突入する通常システム。設定変更前RT残G等の扱いは未固定。
- advantageousSectionReset: 有利区間制度導入前のため `NOT_APPLICABLE`。
- resetBenefits: 設定変更後CZ開始のため、朝一にCZ由来のRT突入機会が存在する。これを固定的な出玉恩恵率とは扱わない。
- resetPenalties: 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: slot-games.onlineは「朝一にチェリーより先にベルが成立し、RT突入したら設定変更の可能性が高くなる」とする判別手掛かりを掲載。確定条件ではなく `WEAK_TO_MODERATE_CLUE_ANALYSIS_SINGLE` として保持。ガックン等の本機固有確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更時CZ開始は確認したが、朝一CZからのRT突入率や変更判別精度などの設定変更専用公開数値は `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「スカイラブ / スカイラブX / SNKプレイモア / 2007」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / CZ / ガックン / 天井 / ベル / チェリー」を組み合わせ、P-WORLD、パチマガスロマガ旧攻略、パチマガインターネット、パチ7の当時解析担当者回顧、古い機種情報サイト、後年整理資料を再横断。今回、初代固有の「設定変更時CZスタート」と、朝一ベル先行→RT突入を変更判別の手掛かりとする資料を追加固定。一方、据え置き・純電断時のCZ/RT内部状態、設定変更前RT残G等の処理は直接資料を固定できず一般的5号機挙動から補完しない。

## sources

初回取得日: 2026-08-31
resetBehavior再取得日: 2026-09-11

1. P-WORLD — スカイラブ「2007年」
   - https://www.p-world.co.jp/machine/database/4529
   - 2007年2月導入、メーカーSNKプレイモア、型式名スカイラブX、5号機RT、BIG/異色7ボーナスの払い出し終了条件
   - reliability: INDUSTRY
2. パチマガインターネット — スカイラブ / SNKプレイモア
   - https://psmaga.com/database/machine/slot_index.php?id=5708
   - 4種類ボーナス個別確率、7000P×10万日シミュレートPAYOUT、BIG/CT純増目安
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ旧攻略 — スカイラブ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/a.php
   - 5号機/5ライン/3枚掛け、CZ→RTループ、BIG約270枚/CT約104枚
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — スカイラブ 小役確率/1000円あたりプレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/c.php
   - 設定別33.28〜35.15P/1000円
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — スカイラブ CT中の打ち方
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/e.php
   - CT技術介入でMAX111枚
   - reliability: ANALYSIS_HIGH
6. pacnk — スカイラブ設定判別ツール
   - https://pacnk.com/slot/tools/sh_sukairabu2007.html
   - 2007年2月、設定別BIG/CB合算、丸めPAYOUT
   - reliability: ANALYSIS_SINGLE
7. パチ7 — 5号機初期の名機『スカイラブ』は、こうして暴いた！
   - https://pachiseven.jp/articles/detail/11235
   - 当時解析担当ライターによる回顧。BIG約270枚、MB最大111枚、33G RT、RT約0.2枚/G、CZループ構造
   - reliability: ANALYSIS_HIGH
8. slot-games.online — パチスロスカイラブ概要
   - https://slot-games.online/slot/skylove.html
   - 2007年初代。天井なし、33G完走型RT/CZ構造に加え「設定変更時はチャンスゾーンからスタート」、朝一ベル先行後RT突入を変更可能性の手掛かりと記載。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE

## missingFields

- 据え置き/電源OFF→ON時のCZ・RT内部状態処理
- 設定変更前RT/CZ残状態の詳細処理
- 本機固有ガックン等の確定resetDetection
- 設定変更専用公開朝一数値

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

## conflicts

- CT規定払い出し終了条件: パチマガ旧攻略142枚 / P-WORLD145枚表記。平均せず双方保持。純増目安約104枚と技術介入MAX111枚は別定義として保存。
