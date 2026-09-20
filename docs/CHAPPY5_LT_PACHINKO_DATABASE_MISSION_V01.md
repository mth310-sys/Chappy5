# Chappy5 ラッキートリガー搭載パチンコ DB 収集ミッション v0.1

更新日: 2026-09-20

## 目的

ラッキートリガー（LT）を搭載する実在パチンコ機の公開スペックを収集し、Chappy5内にパチスロDBとは分離したパチンコ機種DBを構築する。

用途:
- ホール経営ゲームの機種マスタ候補
- パチンコ的なゲームフロー/出玉設計の研究
- 将来のオリジナルパチスロにLT的ゲーム性を取り込む際の物差し
- 将来パチンコを実装する場合の基礎資料

## 対象範囲 — 絶対条件

**ラッキートリガー搭載パチンコ機のみを対象とする。**

- LT非搭載機は収集しない。
- LT搭載を確認できない機種はDBへ確定登録しない。
- 同一シリーズでもLT搭載版と非搭載版を混同しない。
- 甘デジ、ライトミドル、ミドル等の区分を問わず、LT搭載なら対象。
- 原則として確認できるLT搭載機を広く収集し、代表機だけに限定しない。
- 後継機・別スペックは別レコードとして扱う。

## 最優先で集める共通データ

1. machineName — 正式機種名
2. manufacturer — メーカー
3. releaseDate — 導入時期
4. modelType — 甘デジ/ライトミドル/ミドル等
5. gameType — ST/一種二種混合/転落等、公開情報で確認できるゲーム構造
6. jackpotProbability — 通常時大当り確率
7. initialPayout — 初当り時の主要出玉
8. rushEntryRate — 初回RUSH突入率
9. rushContinuationRate — 通常RUSHの継続率/継続期待値
10. ltName — LT/上位状態の正式名称
11. ltEntryRoute — LTへの主要突入経路
12. ltEntryRate — 公開されているLT突入率/到達率
13. ltContinuationRate — LT中の継続率/継続期待値
14. ltPayoutStructure — LT中の主要出玉・振り分け
15. totalPayoutDistribution — 主要な大当り出玉振り分け
16. timeShortening — 時短回数/電サポ回数等
17. cTimeOrSpecialSystems — Cタイム等、LT到達に関係する特殊機構
18. ceilingOrSupport — 遊タイム等がある場合
19. notes — 比較上重要な特徴

## LTゲームフロー — 必須

数値だけでなく、各機種についてプレイヤーがLTへ到達する流れを簡潔に保存する。

例:
```
通常時
 ↓ 初当り
RUSH非突入 / RUSH突入
 ↓
通常RUSH
 ↓ 特定条件
LT発動
 ↓
LT RUSH
 ↓
終了
```

実機の公開仕様に合わせて機種ごとに記述し、存在しない段階を勝手に補わない。

## 振り分けの扱い

LT機では入口とLT中の出玉振り分けがゲーム性を大きく左右するため、公開されている主要振り分けを保存する。

区別する:
- 通常時初当り
- RUSH中
- LT突入契機
- LT中
- 特図1/特図2など公開資料上必要な区分

「約」「TOTAL」「実質」「合算」「期待値」を混同しない。

## 情報源優先順位

1. メーカー公式
2. 業界一次資料/公式製品資料
3. 信頼できる攻略・解析サイト
4. 複数二次資料の一致
5. 単一二次資料

出典URLと取得日を必ず残す。

## 信頼度

- OFFICIAL
- INDUSTRY
- ANALYSIS_HIGH
- ANALYSIS_SINGLE
- UNVERIFIED
- CONFLICT

不明値を推測で埋めない。
競合する数値は平均せずCONFLICTとして双方を残す。

## 5人の作業方式

既存のDirector 1〜5の恒常的なシミュレーション担当は変更しない。
本ミッション実行時だけ、5人全員が同一LT機キューをリレーして収集・QAする。

### Director 1 — Discovery
- LT搭載機候補を発見
- 正式機種名/メーカー/導入時期を確認
- LT搭載根拠を確認
- 次の未処理機種をキュー化

### Director 2 — Core Spec
- 大当り確率
- 初当り出玉
- RUSH突入率
- RUSH継続率
- 基本出玉振り分け
- ゲームタイプ

### Director 3 — Lucky Trigger Structure
- LT正式名称
- LT突入経路
- LT突入率/到達率
- LT継続率
- LT中出玉振り分け
- 通常→RUSH→LTのゲームフロー

### Director 4 — Cross-check
- 別ソースで数値照合
- 約/実質/TOTAL等の定義確認
- 同シリーズ別スペック混同の検査
- 欠損項目の再探索

### Director 5 — QA / Integration
- 全項目の整合性確認
- LT非搭載機混入の排除
- 出典/取得日/信頼度確認
- CONFLICT/UNVERIFIED整理
- INDEX更新と次回再開地点の明示

## 保存先

パチスロ実機DBとは混ぜない。

```
docs/lt_pachinko_db/
├─ INDEX.md
├─ machines/
└─ analysis/
```

- `INDEX.md`: 収集済み機種、状態、次回再開地点
- `machines/*.md`: 1機種1レコード
- `analysis/`: LT構造比較や将来の物差し

## 最小機種レコード

```text
machineName:
manufacturer:
releaseDate:
modelType:
gameType:
jackpotProbability:
initialPayout:
rushEntryRate:
rushContinuationRate:
ltName:
ltEntryRoute:
ltEntryRate:
ltContinuationRate:
ltPayoutStructure:
totalPayoutDistribution:
timeShortening:
cTimeOrSpecialSystems:
ceilingOrSupport:
gameFlow:
notes:
sources:
confidence:
missingFields:
conflicts:
```

## 収集ステータス

- DISCOVERED — LT搭載確認済み、未収集
- CORE_COLLECTED — 基本スペック収集済み
- LT_COLLECTED — LT構造収集済み
- QA_PENDING — 照合待ち
- COMPLETE_CORE — 必須項目の収集/確認完了
- PARTIAL — 十分な再探索後も一部欠損
- CONFLICT — 解消していない資料競合あり

## 絶対ルール

- LT搭載機だけを対象とする。
- LT非搭載機を「比較用」として混ぜない。
- 数値を推測で埋めない。
- 同名/シリーズの別スペックを混同しない。
- LT突入率とRUSH突入率を混同しない。
- LT継続率と通常RUSH継続率を混同しない。
- 出玉の「払出」「獲得」「期待出玉」を混同しない。
- 出典URLと取得日を残す。
- 1サイトだけで欠損判定しない。
- 既存パチスロDBを変更しない。
- 既存シミュレーション班の恒常役割を変更しない。

## 完成イメージ

LT搭載パチンコ機を横断して、

- どのような初当り/RUSH構造があるか
- LTへどう到達するか
- LT突入の狭さと突入後性能がどう組み合わされているか
- 継続率と出玉振り分けがどう設計されているか

を比較できるDBとする。

将来的にはこのDBから、遊創舎オリジナル機の「PUSH → Lucky Trigger」のようなパチスロ向け新ゲーム性を設計する際の参考レンジを作れる状態を目指す。
