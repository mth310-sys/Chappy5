# Lucky Trigger Pachinko DB

更新日: 2026-09-21

## Scope
ラッキートリガー搭載パチンコ機のみを収集する。詳細ルール: [`CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`](../CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md)

## Status
- 収集開始済み
- 登録機種: 11
- COMPLETE_CORE: 11
- 収集順: 2024年3月の初期LT機から時系列
- 2024-03-04初期LT 7機種 COMPLETE_CORE。
- 2024-04-08 2機種 COMPLETE_CORE。
- 2024-04-22: e新・必殺仕置人 超斬撃199 / P FAIRY TAIL これが七炎竜の力だ をCOMPLETE_CORE化。
- 次回再開地点: **2024-04-22 PAハイスクール・フリート オールスター すい～とでハッピー!2400**。同日候補を閉じてから次日付へ進む。

## Queue
5人リレー。各リレーはGitHub最新mainを読み、前リレーの次の未処理機種から同一時系列キューを継続する。5人目は収集に加えてQA / Integrationを行う。

## Machines
| 導入日 | 機種 | メーカー | 状態 |
|---|---|---|---|
| 2024-03-04 | P緋弾のアリア ～緋緋神降臨～ ラッキートリガーVer. | 藤商事 | COMPLETE_CORE |
| 2024-03-04 | P北斗の拳 強敵 LT | サミー | COMPLETE_CORE |
| 2024-03-04 | P真・座頭市物語 | ニューギン | COMPLETE_CORE |
| 2024-03-04 | Pこの素晴らしい世界に祝福を！199LT「このラッキートリガーに祝福を！」 | 豊丸産業 | COMPLETE_CORE |
| 2024-03-04 | PLT OVERLORD魔導王光臨 | サンセイアールアンドディ | COMPLETE_CORE |
| 2024-03-04 | P世紀末・天才バカボン～福神SPEC～ | D-light | COMPLETE_CORE |
| 2024-03-04 | ぱちんこＧⅠ優駿倶楽部２ ラッキートリガーver | コナミアミューズメント | COMPLETE_CORE |
| 2024-04-08 | P大工の源さん超韋駄天2 極源LighT | 三洋物産 | COMPLETE_CORE |
| 2024-04-08 | Pバイオハザード RE:2 LTver. | アムテックス | COMPLETE_CORE |
| 2024-04-22 | e 新・必殺仕置人 超斬撃199 | 京楽産業. | COMPLETE_CORE |
| 2024-04-22 | P FAIRY TAIL これが七炎竜の力だ | 藤商事 | COMPLETE_CORE |

## Boundary / discovery notes
- 2024-03-18 Pファンキードクター 悪魔12000ver. — LT非搭載確認済み、対象外。
- 2024-04-22 e新・必殺仕置人 超斬撃199 — 京楽LT第一弾。通常約1/199.9、下位RUSH突入60%・継続約60%、LT超斬撃RUSH約88%・右ALL1500。下位図柄揃い約50%で高坂超決戦、勝率約50%。
- 2024-04-22 P FAIRY TAIL これが七炎竜の力だ — LT七炎竜RUSH。図柄揃い約1/399.6、FTチャージ約1/324.3、合算約1/179.06。図柄揃い時RUSH約75%、約5%LT直行、下位中大当り約40%からLT。下位約65%、LT約77%。
- 2024-04-22 PAハイスクール・フリート オールスター すい～とでハッピー!2400 — LT搭載・同日導入をDiscovery確認。次の未処理機種。P-WORLDで通常1/99.9、初回RUSH50回、100回、LT160回、LT継続約89%等の基本構造まで確認済み。次リレーで正式レコード化・別ソース照合する。

## Latest relay note — Relay 3
retrievedAt: 2026-09-21
- 最新main README、LTミッションv0.1、INDEXを同期確認。
- 直前再開地点2024-04-22から継続。
- e新・必殺仕置人 超斬撃199を業界一次系+解析複数で照合しCOMPLETE_CORE登録。
- P FAIRY TAIL これが七炎竜の力だを業界一次系+HAZUSE+P-WORLDで照合しCOMPLETE_CORE登録。
- 初当り基準の総LT到達率が直接公表されないものは推測計算で埋めず、入口別確率を保存。
- CONFLICTなし。

### 次回再開地点
**2024-04-22 PAハイスクール・フリート オールスター すい～とでハッピー!2400** からCore/LT収集・複数ソース照合。同日LT候補を閉じてから時系列で次へ進む。
