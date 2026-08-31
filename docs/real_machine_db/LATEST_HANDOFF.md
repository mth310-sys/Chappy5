# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 169件目 `コータローまかりとおる!`（IGTジャパン、2007-09）までを継承。
- 2007-09-18〜30の残候補を再監査し、具体導入日が取れない月精度9月機も十分な再探索後に順次処理する方針を継続。
- **170件目として `戦慄-IF IT HAPPEN`（エール、型式名: 戦慄DD、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_senritsu-if-it-happen.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `e75432fd2f746fd28ee5a2a96c479433808dbb0c`
- resetBehavior遡及QAの既存進捗は `スーパーお父さん`（2006-04）まで。次は `ウイニングレッド / ウイニングレッド30` の未補完側から継続。

## 170. 戦慄-IF IT HAPPEN

- manufacturer: エール
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ボーナス + RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- K-Navi当時記事（2007-08-17）で、株式会社エールの新機種 `戦慄-IF IT HAPPEN`、型式名 `戦慄DD` を確認。
- 同記事では2007-08-23に新機種プレス発表会予定。
- P-WORLDでメーカー `エール`、型式名 `戦慄ＤＤ`、導入開始 `2007年09月`。
- 2007-08-28の当時業界記事保存でもエール第一弾のプレス説明会開催を確認。
- 9月内の具体納品/ホール導入日は、機種名・型式名・メーカー名・当時記事・旧DBへ検索語を変えて再探索したが月精度以上を確定できず `UNVERIFIED`。

### 性能コア

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/177.1 |
| 2 | 1/170.7 |
| 3 | 1/164.7 |
| 4 | 1/159.1 |
| 5 | 1/153.8 |
| 6 | 1/149.0 |

- HAZUSEの設定別合成確率を採用。旧保存資料の約 `1/177→1/148` と概ね整合。
- SENRITSU BONUSは251枚を超える払い出しで終了。旧保存資料の純増約182枚は単一二次資料値として保持。
- RT `戦慄タイム` は3種類の1枚役契機で突入し、10G消化またはボーナス成立で終了。旧保存資料では「ほぼ現状維持」。
- payoutRateBySetting: HAZUSEが調査中で、別系統資料でも設定別機械割を確定できず `UNVERIFIED`。
- baseGamesPer50: 十分再探索後も比較可能値を確定できず `UNVERIFIED`。
- RT純増/G: 定量値を確定できず `UNVERIFIED`。

### v0.7 resetBehavior

`戦慄 / 戦慄DD / IF IT HAPPEN / エール / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / ガックン` を組み替え、当時解析・旧DB・業界記事・後年機種DBを横断。

- settingChangeBehavior: `UNVERIFIED`。設定変更時のRT状態/残G、内部状態の初期化/引継ぎを確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時のRT状態/残G・内部状態の引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみのRT状態/残G・内部状態処理を確定できず。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。RT残Gの設定変更時処理は `UNVERIFIED`。
- ceilingAfterReset: リセット短縮天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一/設定変更専用モード `NONE_CONFIRMED`。
- stateAfterReset: RT内部状態・残Gの再抽選/引継ぎ `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: ガックン・初期出目・液晶/フィギュア状態等による本機固有変更判別は十分再探索後も `UNVERIFIED`。
- numericResetData: 公開朝一数値 `NONE_CONFIRMED`。

## 主要出典

- K-Navi 当時業界記事（2007-08-17）: https://p-kn.com/topics/news/311/
- P-WORLD: https://www.p-world.co.jp/machine/database/4878
- HAZUSE: https://hazuse.com/machine/pachislot/7S0536/
- 当時個人保存資料「機種情報 戦慄DD」: https://plaza.rakuten.co.jp/kirialoverio/9000/
- 2007-08当時業界記事保存: https://p-mans.blogspot.com/2007/08/

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準170件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `DIGIParadise / くりぃむしちゅー / めんそーれ2-30 / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 次の優先候補は `DIGIParadise`。具体納品/ホール導入日を優先探索し、9月17日以前が判明した場合は遡及位置を明示して追加する。
4. 2007-09-18〜30で具体導入日が取れない場合、月精度9月機を十分な再探索後に順次処理し、9月漏れ監査完了後に2007年10月へ進む。
5. 現時点で `マッドジー` は2007-10-09、`マジックモンスター2` は2007-10-22予定を確認済み。これより早い10月機があれば先に処理する。
6. resetBehavior遡及QAは `ウイニングレッド / ウイニングレッド30`（2006-04）の未補完側から継続。
7. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
