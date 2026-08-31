# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 170件目 `戦慄-IF IT HAPPEN`（エール、2007-09）までを継承。
- **171件目として `デジパラダイス`（デージー、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_digiparadise.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `dbb66f77324dd46810ac0d52ddf5d43342e4945c`
- resetBehavior遡及QAは `ウイニングレッド` / `ウイニングレッド30`（2006-04）を補完済み。
- QA commits: `a887d9f82d95cffdf75e7cd3a72d6c73f7270d90` / `27134d1e001d2a38a09a2779dfd341c551cc8bd6`

## 171. デジパラダイス

- manufacturer: デージー
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ノーマル / BIG+REG / 同時成立あり
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- 2007-07-06の電遊協5社合同内覧会にデージーの `デジパラダイス` が出品され、当時記事では「9月ごろ発売予定」。
- 2007年当時のパチスロ資料では `2007/9/下発売` と整理。
- `デジパラダイス / DIGIParadise / デージー / 2007 / 9月 / 納品 / 導入` 等で当時業界記事・旧DB・回顧資料を再探索したが、具体納品/ホール導入日は確定できず月精度 `2007-09` を採用。

### 性能コア

| 設定 | BIG合成 | REG | ボーナス合成 | PAYOUT | 1000円G数 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/289.98 | 1/471.48 | 1/179.55 | 96.10% | 35.60G |
| 2 | 1/281.27 | 1/455.11 | 1/173.84 | 97.74% | 35.83G |
| 3 | 1/273.07 | 1/434.01 | 1/167.61 | 99.56% | 36.09G |
| 4 | 1/265.33 | 1/414.78 | 1/161.82 | 101.38% | 36.38G |
| 5 | 1/257.00 | 1/394.80 | 1/155.67 | 103.45% | 36.71G |
| 6 | 1/249.19 | 1/376.64 | 1/149.97 | 105.80% | 37.27G |

- BIG: 345枚超払い出し、純増約312枚。
- REG: 105枚超払い出し、純増約104枚。
- パチマガスロマガで `ノーマル/同時成立あり`、RT等の付加機能なしを確認。
- 物差し必須コアは充足したため `COMPLETE_CORE`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`。本機固有の設定変更時内部処理を確定できず。
- carryOverBehavior: `UNVERIFIED`。
- powerCycleBehavior: `UNVERIFIED`。
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`。通常時ゲーム数天井・RTゲーム数は確認されない。
- ceilingAfterReset: `NONE_CONFIRMED`。
- modeAfterReset: `NONE_CONFIRMED`。
- stateAfterReset: `NONE_CONFIRMED`。RT/ART/CZを搭載しない。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: `UNVERIFIED`。本機固有のガックン・初期出目・7セグ等による変更判別を確定できず。
- numericResetData: `NONE_CONFIRMED`。

## resetBehavior遡及QA

### ウイニングレッド / ウイニングレッド30

- 既存性能コア `COMPLETE_CORE` は維持。
- 両機へv0.7 `resetBehavior` と `resetBehaviorQA: PARTIAL` を追加。
- 通常時ゲーム数天井・RT/ART/CZは本機では確認されない。
- 設定変更/据え置き/電源OFF→ON時の本機固有内部処理、ガックン等の変更判別は検索語・資料系統を変えて再探索しても確定できず `UNVERIFIED`。
- 後継 `ホークIII / ホークIII-30` には設定変更後無限RTという明確な朝一恩恵が存在するが、これを前作ウイニングレッドへ流用しないことを明記。
- 有利区間は `NOT_APPLICABLE`、公開朝一専用数値は `NONE_CONFIRMED`。

## 主要出典

### デジパラダイス
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/a.php
- パチマガスロマガ ボーナス確率・PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/h.php
- パチマガスロマガ 小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/c.php
- Pマンズ保存記事（2007-07-10）: https://p-mans.blogspot.com/2007/07/
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html

### ウイニングレッドQA比較
- P-WORLD業界ニュース — ホークIII: https://news.p-world.co.jp/articles/1856/greenbelt
- HAZUSE — ウイニングレッド解析: https://www.hazuse.com/i/det2/winningred/top.htm

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準171件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `くりぃむしちゅー / めんそーれ2-30 / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 次の優先候補は `くりぃむしちゅー`。ロデオ機・2007年9月リリースまでは確認済み。具体納品/ホール導入日を優先探索し、より早い未処理9月機が判明した場合はそちらを先に処理する。
4. 2007年9月内の月精度機は、具体日を十分再探索しても確定できない場合のみ月精度で登録する。
5. 9月漏れ監査完了後に2007年10月へ進む。`マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定は既確認。
6. resetBehavior遡及QAは、`ウイニングレッド / ウイニングレッド30` の次に位置する既存レコードを最新mainで時系列確認し、resetBehavior未補完の最古機から続行する。`お庭でドン / ロックユークイーン3 / ボンバーマンビクトリーF / スーパーお父さん` は既補完のため重複改変しない。
7. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
