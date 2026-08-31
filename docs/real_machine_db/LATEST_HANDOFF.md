# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 175件目 `熊酒場-30`（ネット、2007-09-02）までを継承。
- 2007-09-02〜09-09の残候補を、当時業者向け新台一覧、グリーンべると/P-WORLD業界記事、検定保存記事、K-Navi、旧DB、5号機回顧で再監査。残候補 `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / マスクオブゾロ / 学習パチスロ国語` について、この区間へ置ける具体納品日は今回確定できず、推測挿入しない。
- 次に具体納品日を業界記事で確定できる `スロット春夏秋冬` の納品開始予定 `2007-09-24` へ前進。
- **176件目として `スロット春夏秋冬`（西陣 / ソフィア、2007-09-24）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-24_slot-shunkashuto.md`
- coreStatus: `PARTIAL`（通常時50枚ベースのみ未確定）
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `fece32f2311df6423d64292d1faffa5b0d4a8847`
- resetBehavior遡及QAは `ルーニー・テューンズ バック・イン・アクション`（2006-05-15）の欠損を補完。既存性能status `PARTIAL`は維持し、reset QAを別管理で `PARTIAL` とした。
- Looney Tunes reset QA commit: `7a79acb83a79b0e137f7eb7baa649af880717dec`

## 176. スロット春夏秋冬

- manufacturer: 西陣 / ソフィア
- releaseDate: `2007-09-24`
- generation: 5号機初期
- systemType: ボーナス + 固定G数RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- グリーンべると2007-08-24当時記事で、8月20日に西陣が `スロット春夏秋冬AR1` を発表し、**納品予定は9月24日から**と明記。
- 2007-07-30東京都公安委員会の検定保存記事では型式 `スロット春夏秋冬AR1`、申請主体はソフィアとして確認。
- K-Navi/P-WORLD/5号機クロニクルはいずれも2007年9月機として一致。

### 性能コア

| 設定 | BIG | REG | 合算 | 機械割 |
|---|---:|---:|---:|---:|
| 1 | 1/381.02 | 1/630.15 | 1/237.45 | 96.41% |
| 2 | 1/360.09 | 1/618.26 | 1/227.56 | 98.64% |
| 3 | 1/344.93 | 1/606.81 | 1/219.92 | 100.93% |
| 4 | 1/327.68 | 1/585.14 | 1/210.05 | 102.90% |
| 5 | 1/315.08 | 1/574.88 | 1/203.53 | 105.54% |
| 6 | 1/300.62 | 1/555.39 | 1/195.05 | 106.91% |

- K-Navi、P-WORLD、5号機クロニクル丸め値で機械割が整合。
- グリーンべると: 赤7BIG純増平均約324枚、そよかBIG/祭BIG約270枚。
- 赤7BIG後100G RT、他2BIG後50G RT、RT純増約+0.7枚/G。
- P-WORLDは赤7約394枚・そよか約305枚を `BB+RT` 込みとして掲載するため、ボーナス単体純増と混同せず定義差として保存。
- 通常時50枚/1000円ベースは検索語・資料系統を変えて再探索後も確定できず `UNVERIFIED`。このためcoreStatusは `PARTIAL`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED / PARTIAL`。設定変更時の100G/50G RT残G・内部RT状態処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時のRT残G/状態引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみのRT状態処理を直接確定できず。
- gameCounterReset / ceilingAfterReset: 通常時ゲーム数天井・短縮天井は `NONE_CONFIRMED`。100G/50Gはボーナス後RTであり通常時天井ではない。
- modeAfterReset: 朝一専用モード/変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: RT状態処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン・初期出目・液晶/ランプ変更判別 `UNVERIFIED`。
- numericResetData: 公開朝一専用数値 `NONE_CONFIRMED`。

## resetBehavior遡及QA

### ルーニー・テューンズ バック・イン・アクション（2006-05-15）

- 既存性能status `PARTIAL`を維持し、v0.7 `resetBehavior`を追加。
- SUPER BIG後200G、バグズBIG後50GのRT「ルーニーチャンス」（約+0.8枚/G）は既存コア情報として維持。
- 200G/50Gは通常時ハマリ天井ではないことを明確化。
- 設定変更、据え置き、電源OFF→ONでのRT残G/内部RT状態の扱いは、機種名表記揺れ・メーカー名・RT名・朝一/ガックン等を組み替えて再探索しても直接確定資料を取得できず `UNVERIFIED`。
- 朝一専用モード、リセット短縮天井、公開朝一数値、固有ガックンは `NONE_CONFIRMED / UNVERIFIED`。
- resetBehaviorQAは `PARTIAL`。性能コア判定とは別管理。

## 主要出典

### スロット春夏秋冬
- グリーンべると/P-WORLD業界ニュース（2007-08-24）: https://news.p-world.co.jp/articles/2347/greenbelt
- K-Navi: https://p-kn.com/slot/643/
- P-WORLD: https://www.p-world.co.jp/machine/database/4889
- 5号機クロニクル 西陣: https://5goki.com/nishijin
- Pマンズ保存記事（2007-07-30検定情報）: https://p-mans.blogspot.com/2007/

### ルーニー・テューンズ バック・イン・アクション
- P_Style777: https://ps777.net/data/looneytunes.htm
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/01/a.php

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準176件地点から継続。** 2007年9月残候補 `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / マスクオブゾロ / 学習パチスロ国語` の具体納品日を引き続き再探索する。
2. これらが月精度しか取れない場合は、日付を推測せず `2007-09` として性能コアを収集して欠損明示する方式へ切り替え、9月漏れを閉じて2007年10月へ進む。
3. `ザ・ドゥーナッツのトンdeピース` は2007年9月導入、2007-10-02に都内ホールイベント実施までは確認済み。型式 `トンデピースZ` は2007-07-30検定情報で確認済み。
4. `サザンドリーム` は2007年9月導入と機械割96.9〜107.1%を確認済みだが、具体納品日は未確定。
5. 2007年10月の既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
6. **resetBehavior遡及QAの次候補は `ゴールドシオ30`（2006-05）。** 最新mainでは `COMPLETE_CORE`だがresetBehavior未収集を確認済み。既存COMPLETE_COREを崩さずreset QAを別管理で補完する。
7. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
