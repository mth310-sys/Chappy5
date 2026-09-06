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
resetBehaviorQA: PARTIAL
resetQaLastUpdated: 2026-09-06

- settingChangeBehavior: 本機固有の設定変更時にCZ/RT状態がどう扱われるかを高信頼資料で確定できず UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: 据え置き時のCZ/RT内部状態引継ぎについて高信頼資料で確定できず UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: 電源OFF→ONのみのCZ/RT状態挙動を高信頼資料で確定できず UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: 天井非搭載のため天井ゲーム数管理は非該当
- ceilingAfterReset: 非該当（天井非搭載）
- modeAfterReset: 朝一専用モード/設定変更専用モードの公開情報を確認できず
- stateAfterReset: CZ/RT状態の設定変更時再抽選・消去・維持は今回確定できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 公開された主要な朝一/設定変更恩恵を確認できず
- resetPenalties: 公開された主要な設定変更不利要素を確認できず
- resetDetection: 本機固有のガックン等変更判別を、当時解析・後年回顧・機種DBを横断したが確定できず
- publicMorningNumbers: 確認できる公開数値なし

### resetBehavior 再探索メモ

「スカイラブ / スカイラブX / SNKプレイモア / 2007」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / CZ / ガックン / 天井」を組み合わせ、P-WORLD、パチマガスロマガ旧攻略、パチマガインターネット、パチ7の当時解析担当者回顧、古い機種情報サイトを再横断した。2026-09-06の遡及QAでも、天井非搭載、通常時のCZ/RTシステムまでは高信頼で確認できた一方、ホール電源断・設定変更時の内部CZ/RT状態処理を直接示す追加資料は固定できなかった。一般的な5号機挙動から補完せずPARTIALを維持する。

## sources

初回取得日: 2026-08-31
resetBehavior再取得日: 2026-09-06

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
   - 2007年5号機、天井機能なし、33G完走型RTの後年整理
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更/据え置き/電源OFF→ON時のCZ・RT内部状態処理
- 本機固有のresetDetection（ガックン等）

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- CT規定払い出し終了条件: パチマガ旧攻略142枚 / P-WORLD145枚表記。平均せず双方保持。純増目安約104枚と技術介入MAX111枚は別定義として保存。
